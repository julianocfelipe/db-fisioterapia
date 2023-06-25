CREATE TABLE [cancellation_reasons] (
  [id] int PRIMARY KEY IDENTITY(1, 1),
  [description] varchar(20),
  [schedules_id] int
)
GO
ALTER TABLE [cancellation_reasons] ADD FOREIGN KEY ([schedules_id]) REFERENCES [schedules] ([id])
