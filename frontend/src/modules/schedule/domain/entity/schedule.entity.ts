import Doctor from './doctor.entity';
import Patient from './patient.entity';
import ServiceType from './service_type.entity';

export default class Schedule {
  date: string;
  service: ServiceType;
  doctor: Doctor;
  patient: Patient;

  // format date to yyyy-mm-ddThh:mm
  static serializeDate(date: Date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${year}-${month}-${day}T00:00`;
  }
}
