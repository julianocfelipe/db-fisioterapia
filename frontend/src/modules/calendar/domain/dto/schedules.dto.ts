import Doctor from "@/modules/schedule/domain/entity/doctor.entity";
import Patient from "@/modules/schedule/domain/entity/patient.entity";
import Schedule from "@/modules/schedule/domain/entity/schedule.entity";
import ServiceType from "@/modules/schedule/domain/entity/service_type.entity";
import Status from "@/modules/schedule/domain/entity/status.entity";
import { DateTime } from "luxon";

export default class ScheduleDTO {
    id: number;
    start_service: string;
    end_service: string;
    schedule_date: string;
    physiotherapists: Doctor;
    patients: Patient;
    services: ServiceType;
    schedules_status: Status;

    static toSchedule(item: ScheduleDTO): Schedule {
        return {
            doctor: item.physiotherapists,
            service: item.services,
            patient: item.patients,
            status: item.schedules_status,
            start_service: item.start_service ? DateTime.fromISO(item.start_service).toJSDate() : null,
            end_service: item.end_service ? DateTime.fromISO(item.end_service).toJSDate() : null,
            schedule_date: item.schedule_date,
        }
    }
}