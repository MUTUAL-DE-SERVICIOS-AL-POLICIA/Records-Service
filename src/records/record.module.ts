import { Module } from '@nestjs/common';
import { RecordService } from './record.service';
import { RecordController } from './record.controller';
import { RecordAppMobile, RecordBeneficiaries } from './entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RecordAppMobile, RecordBeneficiaries])],
  controllers: [RecordController],
  providers: [RecordService],
})
export class RecordModule {}
