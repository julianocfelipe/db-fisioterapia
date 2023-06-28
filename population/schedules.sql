INSERT INTO schedules (start_time, 
                      start_end, 
                      schedule_date, 
                      physiotherapist_id, 
                      patients_id, 
                      schedules_services_id, 
                      payments_methods_id, 
                      schedules_status_id) 
              VALUES (' ', '')




CREATE TABLE [schedules] (
  [id] int PRIMARY KEY NOT NULL IDENTITY(1, 1),
  [start_service] datetime,
  [end_service] datetime,
  [schedule_date] datetime NOT NULL,
  [physiotherapist_id] int NOT NULL,
  [patients_id] int NOT NULL,
  [schedules_services_id] int NOT NULL,
  [payments_methods_id] int UNIQUE NOT NULL,
  [schedules_status_id] int NOT NULL
)