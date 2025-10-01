import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from './common/common.module';
import { DatabaseModule } from './database/database.module';
import { RecordsAppMobileModule } from './records-app-mobile/records-app-mobile.module';
import { RecordsBeneficiariesModule } from './records-beneficiaries/records-beneficiaries.module';
import { RecordsKioskModule } from './records-kiosk/records-kiosk.module';
import { RecordsAuthModule } from './records-auth/records-auth.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, CommonModule, RecordsAppMobileModule, RecordsBeneficiariesModule, RecordsKioskModule, RecordsAuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
