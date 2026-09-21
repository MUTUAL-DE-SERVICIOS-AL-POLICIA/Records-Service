import { Controller, ParseIntPipe } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RecordsSalesService } from './records-sales.service';

@Controller()
export class RecordsSalesController {
  constructor(
    private readonly recordsSalesService: RecordsSalesService,
  ) {}

  @MessagePattern('sales.record.create')
  create(
    @Payload('action') action: string,
    @Payload('input') input: any,
    @Payload('output') output: any,
  ) {
    return this.recordsSalesService.create(action, input, output);
  }

  @MessagePattern('sales.record.findPerson')
  findPerson(@Payload('personId', ParseIntPipe) personId: number) {
    return this.recordsSalesService.findPerson(personId);
  }
}
