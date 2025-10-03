import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { translateAction } from './records-auth.dictionary';
import { RecordsAuth } from './records-auth.entity';

@Injectable()
export class RecordsAuthService {
  constructor(
    @InjectRepository(RecordsAuth)
    private readonly recordAuthRepository: Repository<RecordsAuth>,
  ) {}
  async create(action: string, input?: any, output?: any): Promise<any> {
    const record = this.recordAuthRepository.create({
      action,
      description: translateAction(action, input, output),
      input,
      output,
    });

    return await this.recordAuthRepository.save(record);
  }
}
