import { Module } from '@nestjs/common';
import ScheduleController from './infra/schedule.controller';
import ServiceController from './infra/service.controller';
import { PrismaService } from 'src/core/prisma.service';
import DoctorController from './infra/doctor.controller';

@Module({
  imports: [],
  controllers: [ScheduleController, ServiceController, DoctorController],
  providers: [PrismaService],
})
export default class ScheduleModule {}
