import { Controller } from '@nestjs/common';
import { RecordsAuthService } from './records-auth.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class RecordsAuthController {
  constructor(private readonly recordsAuthService: RecordsAuthService) {}

  @MessagePattern('auth.record.create')
  create(
    @Payload('action') action: string,
    @Payload('input') input: any,
    @Payload('output') output: any,
  ) {
    return this.recordsAuthService.create(action, input, output);
  }
}
