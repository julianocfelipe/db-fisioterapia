import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';

import { ScheduleDTO } from '../domain/dto/schedule.dto';
import { PrismaService } from 'src/core/prisma.service';
import { Response } from 'express';
import { ScheduleStatus } from '../domain/enum/schedule_status.enum';
import { DateTime } from 'luxon';
import FormatterHelper from 'src/shared/helpers/formatter.helper';

@Controller('schedules')
export default class ScheduleController {
  constructor(private readonly prismaService: PrismaService) {}

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

      const birthday = DateTime.fromFormat(
        schedule.patient.birthday,
        'yyyy-MM-dd',
      );

      const patient = await this.prismaService.patients.create({
        data: {
          birthday: birthday.toJSDate(),
          cpf: FormatterHelper.removeSpecialCharacters(schedule.patient.cpf),
          gender: schedule.patient.gender,
          name: schedule.patient.name,
          phone: FormatterHelper.removeSpecialCharacters(
            schedule.patient.phone,
          ),
          email: schedule.patient.email,
          addresses: {
            connect: {
              id: address.id,
            },
          },
        } as any,
      });

      const result = await this.prismaService.schedules.create({
        data: {
          schedule_date: DateTime.fromFormat(
            schedule.schedule_date,
            `yyyy-MM-dd'T'hh:mm`,
          ).toJSDate(),
          physiotherapists: {
            connect: { id: schedule.doctor.id },
          },
          patients: {
            connect: { id: patient.id },
          },
          schedules_status: {
            connect: { id: ScheduleStatus.SCHEDULED },
          },
          services: {
            connect: { id: schedule.service.id },
          },
        } as any,
      });

      response.send(result);
    } catch (error) {
      console.error('ScheduleController::createSchedule', error);
      response
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send({ error: error.message });
    }
  }

  @Get()
  async getSchedules() {
    const result = await this.prismaService.schedules.findMany({
      include: {
        patients: true,
        services: true,
        schedules_status: true,
        physiotherapists: true,
      },
    });

    return result;
  }
}
