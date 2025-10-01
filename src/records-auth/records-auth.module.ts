import { Module } from '@nestjs/common';
import { RecordsAuthService } from './records-auth.service';
import { RecordsAuthController } from './records-auth.controller';
import { RecordsAuth } from './records-auth.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [RecordsAuthController],
  providers: [RecordsAuthService],
  imports: [TypeOrmModule.forFeature([RecordsAuth])],
})
export class RecordsAuthModule {}
