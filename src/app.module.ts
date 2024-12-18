import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from './common/common.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ConfigModule.forRoot(),DatabaseModule , CommonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
