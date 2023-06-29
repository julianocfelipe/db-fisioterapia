CREATE TABLE [payments] (
  [id] int PRIMARY KEY NOT NULL IDENTITY(1, 1),
  [schedules_id] int NOT NULL,
  [payments_status_id] int NOT NULL,
  [payments_methods_id] int NOT NULL,
)
GO

ALTER TABLE [payments] ADD FOREIGN KEY ([schedules_id]) REFERENCES [schedules] ([id])
GO

ALTER TABLE [payments] ADD FOREIGN KEY ([payments_status_id]) REFERENCES [payments_status] ([id])
GO

ALTER TABLE [payments] ADD FOREIGN KEY ([payments_methods_id]) REFERENCES [schedules] ([id])
GO

ALTER TABLE [payments] ADD FOREIGN KEY ([payments_service]) REFERENCES [services] ([id])
GO