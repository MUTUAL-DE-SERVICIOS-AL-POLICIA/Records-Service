import { Module } from '@nestjs/common';
import { RecordsKioskService } from './records-kiosk.service';
import { RecordsKioskController } from './records-kiosk.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecordsKiosk } from './records-kiosk.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RecordsKiosk])],
  controllers: [RecordsKioskController],
  providers: [RecordsKioskService],
})
export class RecordsKioskModule {}
