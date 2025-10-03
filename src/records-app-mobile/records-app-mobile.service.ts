import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { translateAction } from './records-app-mobile.dictionary';
import { RecordsAppMobile } from './records-app-mobile.entity';

@Injectable()
export class RecordsAppMobileService {
  constructor(
    @InjectRepository(RecordsAppMobile)
    private readonly recordAppMobileRepository: Repository<RecordsAppMobile>,
  ) {}

  async create(action: string, input?: any, output?: any): Promise<any> {
    const { user, ...cleanInput } = input || {};
    const record = this.recordAppMobileRepository.create({
      user,
      action,
      description: translateAction(action, user, cleanInput, output),
      input: cleanInput,
      output,
    });

    return await this.recordAppMobileRepository.save(record);
  }

  async findAllAppMobile(affiliateId: number) {
    const records = await this.recordAppMobileRepository
      .createQueryBuilder('record')
      .where(
        "((record.input->'user'->>'affiliateId')::bigint) = :affiliateId",
        { affiliateId },
      )
      .orderBy('record.created_at', 'DESC')
      .getMany();

    return records.map((r) => ({
      humanMessage: translateAction(r.action, r),
    }));
  }
}
