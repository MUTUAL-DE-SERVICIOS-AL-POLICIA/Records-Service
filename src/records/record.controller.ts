import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RecordService } from 'src/records/record.service';

@Controller()
export class RecordController {
  constructor(private readonly recordService: RecordService) {}

  @MessagePattern('record.create')
  create(
    @Payload('service') service: string,
    @Payload('action') action: string,
    @Payload('description') description: string,
    @Payload('metadata') metadata: any,
  ) {
    console.log('action', action);
    return this.recordService.create(service, action, description, metadata);
  }
}
