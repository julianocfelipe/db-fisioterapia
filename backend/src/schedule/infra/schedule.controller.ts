import { Controller, Get, Post } from '@nestjs/common';
import ScheduleService from '../services/schedule.service';

@Controller('schedule')
export default class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}
  @Post()
  async createSchedule(request: Request, response: Response) {}

  @Get()
  async getSchedules(request: Request, response: Response) {
    const result = await this.scheduleService.getSchedules();

    return result;
  }
}
