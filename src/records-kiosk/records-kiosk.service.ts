import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RecordsKiosk } from './records-kiosk.entity';
import { translateAction } from "./records-kiosk.dictionary";
@Injectable()
export class RecordsKioskService {
  constructor(
    @InjectRepository(RecordsKiosk)
    private readonly recordKioskRepository: Repository<RecordsKiosk>,
  ) {}

  async create(
    action: string,
    input?: any,
    output?: any,
  ): Promise<any> {

    const record = this.recordKioskRepository.create({
      action,
      description: translateAction(action, input, output),
      input,
      output,
    });

    return await this.recordKioskRepository.save(record);
  }

}


