CREATE TABLE [patients] (
  [id] int PRIMARY KEY IDENTITY(1, 1),
  [name] varchar(50),
  [birthday] date,
  [cpf] char(11),
  [gender] char(1),
  [address_id] int
)
GO

CREATE TABLE [physiotherapists] (
  [id] int PRIMARY KEY IDENTITY(1, 1),
  [name] varchar(50),
  [cpf] char(11),
  [crf] varchar(15),
  [phone] varchar(11),
  [address_id] int
)
GO

CREATE TABLE [addresses] (
  [id] int PRIMARY KEY IDENTITY(1, 1),
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
  [id] int PRIMARY KEY IDENTITY(1, 1),
  [description] varchar(50),
  [price] decimal(6,2)
)
GO

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

CREATE TABLE [payments_methods] (
  [id] int PRIMARY KEY IDENTITY(1, 1),
  [description] varchar(50)
)
GO

CREATE TABLE [payments] (
  [id] int PRIMARY KEY IDENTITY(1, 1),
  [schedules_id] int,
  [payments_status_id] int,
  [payments_methods_id] int,
  [payments_service] int
)
GO

CREATE TABLE [payments_status] (
  [id] int PRIMARY KEY IDENTITY(1, 1),
  [description] varchar(20)
)
GO

CREATE TABLE [schedules_status] (
  [id] int PRIMARY KEY IDENTITY(1, 1),
  [description] varchar(20)
)
GO

CREATE TABLE [cancellation_reasons] (
  [id] int PRIMARY KEY IDENTITY(1, 1),
  [description] varchar(20),
  [schedules_id] int
)
GO

ALTER TABLE [patients] ADD FOREIGN KEY ([address_id]) REFERENCES [addresses] ([id])
GO

ALTER TABLE [physiotherapists] ADD FOREIGN KEY ([address_id]) REFERENCES [addresses] ([id])
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

ALTER TABLE [payments] ADD FOREIGN KEY ([schedules_id]) REFERENCES [schedules] ([id])
GO

ALTER TABLE [payments] ADD FOREIGN KEY ([payments_status_id]) REFERENCES [payments_status] ([id])
GO

ALTER TABLE [payments] ADD FOREIGN KEY ([payments_methods_id]) REFERENCES [schedules] ([id])
GO

ALTER TABLE [payments] ADD FOREIGN KEY ([payments_service]) REFERENCES [services] ([id])
GO

ALTER TABLE [cancellation_reasons] ADD FOREIGN KEY ([schedules_id]) REFERENCES [schedules] ([id])
GO
