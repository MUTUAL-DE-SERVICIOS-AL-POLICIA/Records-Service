import { Module } from '@nestjs/common';
import { RecordsBeneficiariesService } from './records-beneficiaries.service';
import { RecordsBeneficiariesController } from './records-beneficiaries.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecordsBeneficiaries } from './records-beneficiaries.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RecordsBeneficiaries])],
  controllers: [RecordsBeneficiariesController],
  providers: [RecordsBeneficiariesService],
})
export class RecordsBeneficiariesModule {}
