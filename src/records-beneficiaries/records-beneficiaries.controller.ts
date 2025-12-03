import { Controller } from '@nestjs/common';
import { RecordsBeneficiariesService } from './records-beneficiaries.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class RecordsBeneficiariesController {
  constructor(
    private readonly recordsBeneficiariesService: RecordsBeneficiariesService,
  ) {}

  @MessagePattern('beneficiaries.record.create')
  create(
    @Payload('action') action: string,
    @Payload('input') input: any,
    @Payload('output') output: any,
  ) {
    return this.recordsBeneficiariesService.create(action, input, output);
  }
}
