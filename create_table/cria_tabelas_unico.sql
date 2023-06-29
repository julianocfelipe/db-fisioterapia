CREATE TABLE [patients] (
  [id] int PRIMARY KEY NOT NULL IDENTITY(1, 1),
  [name] varchar(50) NOT NULL,
  [birthday] date NOT NULL,
  [cpf] char(11) NOT NULL,
  [gender] char(1) NOT NULL,
  [address_id] int NOT NULL
)
GO

CREATE TABLE [physiotherapists] (
  [id] int PRIMARY KEY NOT NULL IDENTITY(1, 1),
  [name] varchar(50) NOT NULL,
  [cpf] char(11) NOT NULL,
  [crf] varchar(15) NOT NULL,
  [phone] varchar(11) NOT NULL,
  [address_id] int NOT NULL
)
GO

CREATE TABLE [addresses] (
  [id] int PRIMARY KEY NOT NULL IDENTITY(1, 1),
  [cep] char(8) NOT NULL,
  [state] varchar(15) NOT NULL,
  [city] varchar(15) NOT NULL,
  [neighbourhood] varchar(15),
  [number] varchar(10),
  [complement] varchar(100),
  [reference] varchar(50) NOT NULL
)
GO

CREATE TABLE [services] (
  [id] int PRIMARY KEY NOT NULL IDENTITY(1, 1),
  [description] varchar(50) NOT NULL,
  [price] decimal(6,2) NOT NULL
)
GO

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

CREATE TABLE [payments_methods] (
  [id] int PRIMARY KEY NOT NULL IDENTITY(1, 1),
  [description] varchar(50) NOT NULL
)
GO

CREATE TABLE [payments] (
  [id] int PRIMARY KEY NOT NULL IDENTITY(1, 1),
  [schedules_id] int NOT NULL,
  [payments_status_id] int NOT NULL,
  [payments_methods_id] int NOT NULL
)
GO

CREATE TABLE [payments_status] (
  [id] int PRIMARY KEY NOT NULL IDENTITY(1, 1),
  [description] varchar(20) NOT NULL
)
GO

CREATE TABLE [schedules_status] (
  [id] int PRIMARY KEY NOT NULL IDENTITY(1, 1),
  [description] varchar(20) NOT NULL
)
GO

CREATE TABLE [cancellation_reasons] (
  [id] int PRIMARY KEY NOT NULL IDENTITY(1, 1),
  [description] varchar(20) NOT NULL,
  [schedules_id] int NOT NULL
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

ALTER TABLE [cancellation_reasons] ADD FOREIGN KEY ([schedules_id]) REFERENCES [schedules] ([id])
GO
