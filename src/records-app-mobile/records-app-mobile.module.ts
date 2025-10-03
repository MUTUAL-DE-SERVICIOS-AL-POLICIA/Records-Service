import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecordsAppMobileController } from './records-app-mobile.controller';
import { RecordsAppMobile } from './records-app-mobile.entity';
import { RecordsAppMobileService } from './records-app-mobile.service';

@Module({
  imports: [TypeOrmModule.forFeature([RecordsAppMobile])],
  controllers: [RecordsAppMobileController],
  providers: [RecordsAppMobileService],
})
export class RecordsAppMobileModule {}
