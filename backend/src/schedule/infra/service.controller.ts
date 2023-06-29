import { Controller, Get, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma.service';

@Injectable()
@Controller('services')
export default class ServiceController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  async getSchedules(request: Request, response: Response) {
    const result = await this.prismaService.services.findMany();

    return result;
  }
}
