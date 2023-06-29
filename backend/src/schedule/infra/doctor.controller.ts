import { Controller, Get, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma.service';

@Injectable()
@Controller('doctors')
export default class DoctorController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  async getDoctors(request: Request, response: Response) {
    const result = await this.prismaService.physiotherapists.findMany();

    return result;
  }
}
