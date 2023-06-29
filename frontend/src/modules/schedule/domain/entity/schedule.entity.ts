import Doctor from './doctor.entity';
import Patient from './patient.entity';
import ServiceType from './service_type.entity';
import { DateTime } from 'luxon';
import Status from './status.entity';

export default class Schedule {
  schedule_date: string;
  service: ServiceType;
  doctor: Doctor;
  patient: Patient;
  start_service?: Date;
  end_service?: Date;
  status?: Status;

  // format date to yyyy-mm-ddThh:mm
  static toControllerDate(date: Date): string {
    const serializedDate = DateTime.fromJSDate(date).toFormat("yyyy-MM-dd'T'HH:mm");

    return serializedDate;
  }

  static fromControllerDate(date: string): Date {
    return new Date(Date.parse(date));
  }
}
