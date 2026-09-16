import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecordsSalesController } from './records-sales.controller';
import { RecordsSales } from './records-sales.entity';
import { RecordsSalesService } from './records-sales.service';

@Module({
  imports: [TypeOrmModule.forFeature([RecordsSales])],
  controllers: [RecordsSalesController],
  providers: [RecordsSalesService],
})
export class RecordsSalesModule {}
