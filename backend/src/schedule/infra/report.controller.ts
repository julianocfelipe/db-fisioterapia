import { Controller, Get, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma.service';
import { ScheduleStatus } from '../domain/enum/schedule_status.enum';

@Injectable()
@Controller('reports')
export default class ReportController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  async getDoctors(request: Request, response: Response) {
    const cancelled = await this.prismaService.$queryRaw`
      SELECT dbo.countSchedules(1) as value
    `;

    const attended = await this.prismaService.$queryRaw`
      SELECT dbo.countSchedules(0) as value
    `;

    const bestDoctor = await this.prismaService.$queryRaw`
        EXEC dbo.GetPhysiotherapistsByService
    `;

    const result = await this.prismaService.schedules.findMany({
      where: {
        schedules_status_id: {
          in: [
            ScheduleStatus.CANCELED_BY_CLIENT,
            ScheduleStatus.CANCELED_BY_CLINIC,
            ScheduleStatus.DID_NOT_ATTEND,
          ],
        },
      },
      include: {
        patients: true,
        services: true,
        schedules_status: true,
        physiotherapists: true,
      },
    });

    return {
      cancelled: cancelled[0],
      attended: attended[0],
      bestDoctor: bestDoctor[0],
      data: result,
    };
  }
}
