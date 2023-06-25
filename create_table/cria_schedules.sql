CREATE TABLE [schedules] (
  [id] int PRIMARY KEY IDENTITY(1, 1),
  [start_schedule] datetime,
  [end_schedules] datetime,
  [physiotherapist_id] int,
  [patients_id] int,
  [schedules_services_id] int,
  [payments_methods_id] int UNIQUE,
  [schedules_status_id] int
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