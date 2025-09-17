import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RecordAppMobile, RecordBeneficiaries } from './entities';

@Injectable()
export class RecordService {
  private readonly repoMap: Record<string, Repository<any>>;

  constructor(
    @InjectRepository(RecordAppMobile)
    private readonly recordAppMobileRepository: Repository<RecordAppMobile>,
    @InjectRepository(RecordBeneficiaries)
    private readonly recordBeneficiariesRepository: Repository<RecordBeneficiaries>,
  ) {
    this.repoMap = {
      appMobile: this.recordAppMobileRepository,
      beneficiaries: this.recordBeneficiariesRepository,
    };
  }

  async create(
    service: string,
    action: string,
    description?: string,
    metadata?: any,
  ): Promise<any> {
    const repository = this.repoMap[service];

    if (!repository) {
      throw new Error(`Servicio no soportado: ${service}`);
    }

    const record = repository.create({
      action,
      description,
      metadata,
    });

    return await repository.save(record);
  }
}
