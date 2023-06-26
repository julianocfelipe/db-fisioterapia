import Doctor from './doctor.entity';
import Patient from './patient.entity';
import ServiceType from './service_type.entity';
import { DateTime } from 'luxon';

export default class Schedule {
  date: Date;
  start_date: string;
  end_date: string;
  service: ServiceType;
  doctor: Doctor;
  patient: Patient;

  // format date to yyyy-mm-ddThh:mm
  static toControllerDate(date: Date) {
    const serializedDate = DateTime.fromJSDate(date).toFormat('yyyy-MM-ddTHH:mm');

    return serializedDate;
  }

  static fromControllerDate(date: string): Date {
    return new Date(Date.parse(date));
  }
}
