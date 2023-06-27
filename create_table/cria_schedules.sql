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
GO

ALTER TABLE [schedules] ADD FOREIGN KEY ([physiotherapist_id]) REFERENCES [physiotherapists] ([id])
GO

ALTER TABLE [schedules] ADD FOREIGN KEY ([patients_id]) REFERENCES [patients] ([id])
GO

ALTER TABLE [schedules] ADD FOREIGN KEY ([schedules_services_id]) REFERENCES [services] ([id])
GO

ALTER TABLE [schedules] ADD FOREIGN KEY ([payments_methods_id]) REFERENCES [payments_methods] ([id])
GO

ALTER TABLE [schedules] ADD FOREIGN KEY ([schedules_status_id]) REFERENCES [schedules_status] ([id])
GO