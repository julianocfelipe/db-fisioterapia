import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import ScheduleService from '../services/schedule.service';
import { ScheduleDTO } from '../domain/dto/schedule.dto';
import { PrismaService } from 'src/core/prisma.service';
import { Response } from 'express';
import FormatterHelper from 'src/shared/helpers/formatter.helper';

@Controller('schedules')
export default class ScheduleController {
  constructor(
    private readonly scheduleService: ScheduleService,
    private readonly prismaService: PrismaService,
  ) {}

  @Post()
  async createSchedule(
    @Body() schedule: ScheduleDTO,
    @Res() response: Response,
  ) {
    try {
      const address = await this.prismaService.addresses.create({
        data: {
          cep: FormatterHelper.removeSpecialCharacters(
            schedule.patient.address.cep,
          ),
          city: schedule.patient.address.city,
          complement: schedule.patient.address.complement,
          state: schedule.patient.address.state,
          street: schedule.patient.address.street,
          number: schedule.patient.address.number,
          neighbourhood: schedule.patient.address.neighbourhood,
        },
      });

      const patient = await this.prismaService.patients.create({
        data: {
          birthday: schedule.patient.birthday,
          cpf: FormatterHelper.removeSpecialCharacters(schedule.patient.cpf),
          gender: schedule.patient.gender,
          name: schedule.patient.name,
          address_id: address.id,
        },
      });

      const result = await this.prismaService.schedules.create({
        data: {
          schedule_date: schedule.schedule_date,
          physiotherapist_id: schedule.doctor.id,
          patient_id: patient.id,
        } as any,
      });

      return result;
    } catch (error) {
      console.error('ScheduleController::createSchedule', error);
      response
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send({ error: error.message });
    }
  }

  @Get()
  async getSchedules(request: Request, response: Response) {
    const result = await this.scheduleService.getSchedules();

    return result;
  }
}
