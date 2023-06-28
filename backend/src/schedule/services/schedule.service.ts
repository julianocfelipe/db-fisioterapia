import { PrismaService } from 'src/core/prisma.service';

export default class ScheduleService {
  constructor(private readonly prismaService: PrismaService) {}

  createSchedule(request: Request) {
    const data = request.body as any;

    this.prismaService.schedules.create({
      data: {
        ...data,
        schedules_status_id: data.schedule_id,
      },
    });
  }

  getSchedules() {
    return this.prismaService.schedules.findMany();
  }
}
