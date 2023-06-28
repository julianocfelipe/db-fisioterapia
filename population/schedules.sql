INSERT INTO db_fisio_oficial.dbo.schedules 
(start_service, end_service, schedule_date, physiotherapist_id, patients_id, schedules_services_id, payments_methods_id, schedules_status_id) 
VALUES ('2023-06-15T14:30:00', '2023-06-15T15:30:00', '2023-06-15T14:30:00', '2', '5', '10', '1', '4')

INSERT INTO db_fisio_oficial.dbo.schedules 
(start_service, end_service, schedule_date, physiotherapist_id, patients_id, schedules_services_id, payments_methods_id, schedules_status_id) 
VALUES ('2023-06-15T16:00:00', '2023-06-15T17:00:00', '2023-06-15T16:00:00', '3', '6', '11', '2', '4')

INSERT INTO db_fisio_oficial.dbo.schedules 
(start_service, end_service, schedule_date, physiotherapist_id, patients_id, schedules_services_id, payments_methods_id, schedules_status_id) 
VALUES ('2023-06-23T13:00:00', '2023-06-23T15:00:00', '2023-06-23T13:00:00', '4', '7', '12', '4', '4')

INSERT INTO db_fisio_oficial.dbo.schedules 
(start_service, end_service, schedule_date, physiotherapist_id, patients_id, schedules_services_id, payments_methods_id, schedules_status_id) 
VALUES ('2023-06-22T16:00:00', '2023-06-22T17:00:00', '2023-06-22T16:00:00', '5', '8', '13', '3', '4')

INSERT INTO db_fisio_oficial.dbo.schedules 
(start_service, end_service, schedule_date, physiotherapist_id, patients_id, schedules_services_id, payments_methods_id, schedules_status_id) 
VALUES ('2023-06-21T13:30:00', '2023-06-21T14:30:00', '2023-06-21T13:30:00', '6', '9', '14', '5', '4')



INSERT INTO db_fisio_oficial.dbo.schedules 
(start_service, end_service, schedule_date, physiotherapist_id, patients_id, schedules_services_id, payments_methods_id, schedules_status_id) 
VALUES (null, null, '2023-06-30T13:30:00', '7', '10', '15', '6', '13')

INSERT INTO db_fisio_oficial.dbo.schedules 
(start_service, end_service, schedule_date, physiotherapist_id, patients_id, schedules_services_id, payments_methods_id, schedules_status_id) 
VALUES ('2023-06-29T19:00:00', '2023-06-29T22:00:00', '2023-06-29T19:00:00', '11', '11', '16', '7', '3')

INSERT INTO db_fisio_oficial.dbo.schedules 
(start_service, end_service, schedule_date, physiotherapist_id, patients_id, schedules_services_id, payments_methods_id, schedules_status_id) 
VALUES ('2023-06-30T16:00:00', '2023-06-30T17:00:00', '2023-06-30T16:00:00', '12', '12', '17', '8', '3')

INSERT INTO db_fisio_oficial.dbo.schedules 
(start_service, end_service, schedule_date, physiotherapist_id, patients_id, schedules_services_id, payments_methods_id, schedules_status_id) 
VALUES (null, null, '2023-06-19T13:00:00', '13', '13', '18', '9', '14')

  
  [start_service] datetime,
  [end_service] datetime,
  [schedule_date] datetime NOT NULL,
  [physiotherapist_id] int NOT NULL,
  [patients_id] int NOT NULL,
  [schedules_services_id] int NOT NULL,
  [payments_methods_id] int UNIQUE NOT NULL,
  [schedules_status_id] int NOT NULL