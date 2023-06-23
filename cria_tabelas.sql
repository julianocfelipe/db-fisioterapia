CREATE TABLE [patients] (
  [id] integer PRIMARY KEY IDENTITY(1, 1),
  [name] varchar(50),
  [birthday] date,
  [cpf] char(11),
  [gender] char(1),
  [address_id] integer
)
GO

CREATE TABLE [physiotherapists] (
  [id] integer PRIMARY KEY IDENTITY(1, 1),
  [name] varchar(50),
  [cpf] char(11),
  [crf] varchar(15),
  [phone] varchar(11),
  [address_id] integer
)
GO

CREATE TABLE [addresses] (
  [id] integer PRIMARY KEY IDENTITY(1, 1),
  [cep] char(8),
  [state] varchar(15),
  [city] varchar(15),
  [neighbourhood] varchar(15),
  [number] varchar(10),
  [complement] varchar(100),
  [reference] varchar(50)
)
GO

CREATE TABLE [services] (
  [id] integer PRIMARY KEY IDENTITY(1, 1),
  [description] nvarchar(255),
  [price] float
)
GO

CREATE TABLE [schedules] (
  [id] integer PRIMARY KEY IDENTITY(1, 1),
  [body] text,
  [status] nvarchar(255),
  [start_schedule] timestamp,
  [end_schedules] timestamp,
  [physiotherapist_id] integer,
  [patients_id] integer,
  [services_id] integer,
  [payments_methods_id] integer,
  [schedules_status_id] integer
)
GO

CREATE TABLE [payments_methods] (
  [id] integer PRIMARY KEY IDENTITY(1, 1),
  [description] nvarchar(255)
)
GO

CREATE TABLE [payments] (
  [id] integer PRIMARY KEY IDENTITY(1, 1),
  [schedules_id] integer,
  [payments_status_id] integer,
  [payments_methods_id] integer,
  [status] nvarchar(255),
  [value] float,
  [schedule_id] integer
)
GO

CREATE TABLE [payments_status] (
  [id] integer PRIMARY KEY IDENTITY(1, 1),
  [description] varchar(20)
)
GO

CREATE TABLE [schedules_status] (
  [id] integer PRIMARY KEY IDENTITY(1, 1),
  [description] varchar(20)
)
GO

CREATE TABLE [cancellation_reasons] (
  [id] integer PRIMARY KEY IDENTITY(1, 1),
  [description] varchar(20),
  [schedules_id] integer
)
GO

EXEC sp_addextendedproperty
@name = N'Column_Description',
@value = 'Content of the post',
@level0type = N'Schema', @level0name = 'dbo',
@level1type = N'Table',  @level1name = 'schedules',
@level2type = N'Column', @level2name = 'body';
GO

ALTER TABLE [patients] ADD FOREIGN KEY ([address_id]) REFERENCES [addresses] ([id])
GO

ALTER TABLE [physiotherapists] ADD FOREIGN KEY ([address_id]) REFERENCES [addresses] ([id])
GO

ALTER TABLE [schedules] ADD FOREIGN KEY ([physiotherapist_id]) REFERENCES [physiotherapists] ([id])
GO

ALTER TABLE [schedules] ADD FOREIGN KEY ([patients_id]) REFERENCES [patients] ([id])
GO

ALTER TABLE [schedules] ADD FOREIGN KEY ([services_id]) REFERENCES [services] ([id])
GO

ALTER TABLE [schedules] ADD FOREIGN KEY ([payments_methods_id]) REFERENCES [payments_methods] ([id])
GO

ALTER TABLE [schedules] ADD FOREIGN KEY ([schedules_status_id]) REFERENCES [schedules_status] ([id])
GO

ALTER TABLE [payments] ADD FOREIGN KEY ([schedules_id]) REFERENCES [schedules] ([id])
GO

ALTER TABLE [payments] ADD FOREIGN KEY ([payments_status_id]) REFERENCES [payments_status] ([id])
GO

ALTER TABLE [payments] ADD FOREIGN KEY ([payments_methods_id]) REFERENCES [schedules] ([payments_methods_id])
GO

ALTER TABLE [cancellation_reasons] ADD FOREIGN KEY ([schedules_id]) REFERENCES [schedules] ([id])
GO
