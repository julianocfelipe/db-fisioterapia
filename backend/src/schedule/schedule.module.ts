import { Module } from '@nestjs/common';
import ScheduleController from './infra/schedule.controller';
import ScheduleService from './services/schedule.service';

@Module({
  imports: [],
  controllers: [ScheduleController],
  providers: [ScheduleService],
})
export default class ScheduleModule {}
