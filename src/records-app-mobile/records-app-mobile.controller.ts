import { Controller } from '@nestjs/common';
import { RecordsAppMobileService } from './records-app-mobile.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class RecordsAppMobileController {
  constructor(
    private readonly recordsAppMobileService: RecordsAppMobileService,
  ) {}

  @MessagePattern('appMobile.record.create')
  create(
    @Payload('action') action: string,
    @Payload('input') input: any,
    @Payload('output') output: any,
  ) {
    return this.recordsAppMobileService.create(action, input, output);
  }

  // @MessagePattern('records.findAllAppMobile')
  // findAllAppMobile(@Payload('affiliateId', ParseIntPipe) affiliateId: number) {
  //   return this.recordsAppMobileService.findAllAppMobile(affiliateId);
  // }
}
