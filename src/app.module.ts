import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from './common/common.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [ConfigModule.forRoot(), CommonModule, TestModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
