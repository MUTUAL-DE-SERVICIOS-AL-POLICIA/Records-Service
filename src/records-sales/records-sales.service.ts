import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NatsService } from 'src/common';
import { Repository } from 'typeorm';
import { translateAction } from './records-sales.dictionary';
import { RecordsSales } from './records-sales.entity';

@Injectable()
export class RecordsSalesService {
  constructor(
    @InjectRepository(RecordsSales)
    private readonly recordSalesRepository: Repository<RecordsSales>,
    private readonly nats: NatsService,
  ) {}

  async create(action: string, input?: any, output?: any): Promise<any> {
    const { params, personId: inputPersonId } = input || {};
    const { error } = output || false;

    let personId = inputPersonId ?? null;

    if (error) return;

    if (params && params.personId) {
      personId = params.personId;
    } else if (params && params.affiliateId) {
      const response = await this.nats.firstValue(
        'affiliate.affiliateIdForPersonId',
        {
          affiliateId: params.affiliateId,
        },
      );
      personId = response.personId;
    }

    const { normalizedUser, cleanInput, cleanOutput } = this.normalizeUser(
      input,
      output,
    );

    const record = this.recordSalesRepository.create({
      user: normalizedUser,
      action,
      description: translateAction(action, normalizedUser, cleanInput, output),
      input: cleanInput,
      output: cleanOutput,
      personId,
    });

    return await this.recordSalesRepository.save(record);
  }

  async findPerson(personId: number): Promise<any> {
    const records = await this.recordSalesRepository.find({
      where: { personId },
      order: { createdAt: 'DESC' },
      select: {
        id: true,
        action: true,
        description: true,
        createdAt: true,
      },
    });
    return records;
  }

  private normalizeUser(input?: any, output?: any) {
    const inputUser = input?.user;
    const outputUser = output?.user;

    let normalizedUser: any;
    let cleanInput: any = input;
    let cleanOutput: any = output;

    if (
      inputUser &&
      typeof inputUser === 'object' &&
      !Array.isArray(inputUser)
    ) {
      normalizedUser = inputUser;
      const { user: _iUser, ...rest } = input;
      cleanInput = rest;
    } else if (
      outputUser &&
      typeof outputUser === 'object' &&
      !Array.isArray(outputUser)
    ) {
      normalizedUser = outputUser;
      const { user: _oUser, ...rest } = output;
      cleanOutput = rest;
    } else if (inputUser !== undefined) {
      normalizedUser = { username: inputUser };
      const { user: _iUser, ...rest } = input;
      cleanInput = rest;
    } else if (outputUser !== undefined) {
      normalizedUser = { username: outputUser };
      const { user: _oUser, ...rest } = output;
      cleanOutput = rest;
    } else {
      normalizedUser = {};
    }

    return { normalizedUser, cleanInput, cleanOutput };
  }
}
