import { Controller } from '@nestjs/common';
import { RecordsKioskService } from './records-kiosk.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class RecordsKioskController {
  constructor(private readonly recordsKioskService: RecordsKioskService) {}

  @MessagePattern('kiosk.record.create')
  create(
    @Payload('action') action: string,
    @Payload('input') input: any,
    @Payload('output') output: any,
  ) {
    return this.recordsKioskService.create(action, input, output);
  }
}