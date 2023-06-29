CREATE TABLE [cancellation_reasons] (
  [id] int PRIMARY KEY NOT NULL IDENTITY(1, 1),
  [description] varchar(100) NOT NULL,
  [schedules_id] int NOT NULL
)
GO

ALTER TABLE [cancellation_reasons] ADD FOREIGN KEY ([schedules_id]) REFERENCES [schedules] ([id])
GO
