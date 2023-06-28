import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './core/prisma.service';
import ScheduleModule from './schedule/schedule.module';

@Module({
  imports: [ScheduleModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
