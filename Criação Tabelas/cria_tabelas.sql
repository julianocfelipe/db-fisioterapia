CREATE TABLE [patients] (
  [id] integer PRIMARY KEY NOT NULL IDENTITY(1, 1),
  [name] varchar(50) NOT NULL,
  [birthday] date NOT NULL,
  [cpf] char(11) NOT NULL,
  [gender] char(1) NOT NULL,
  [address_id] integer NOT NULL
)
GO

CREATE TABLE [physiotherapists] (
  [id] integer PRIMARY KEY NOT NULL IDENTITY(1, 1),
  [name] varchar(50) NOT NULL,
  [cpf] char(11) NOT NULL,
  [crf] varchar(15) NOT NULL,
  [phone] varchar(11) NOT NULL,
  [address_id] integer NOT NULL
)
GO

CREATE TABLE [addresses] (
  [id] integer PRIMARY KEY NOT NULL IDENTITY(1, 1),
  [cep] char(8) NOT NULL,
  [state] varchar(15) NOT NULL,
  [city] varchar(15) NOT NULL,
  [neighbourhood] varchar(15),
  [number] varchar(10) NOT NULL,
  [complement] varchar(100),
  [reference] varchar(50)
)
GO

CREATE TABLE [services] (
  [id] integer PRIMARY KEY NOT NULL IDENTITY(1, 1),
  [description] nvarchar(255) NOT NULL,
  [price] float NOT NULL
)
GO

CREATE TABLE [schedules] (
  [id] integer PRIMARY KEY NOT NULL IDENTITY(1, 1),
  [body] text,
  [status] nvarchar(255) NOT NULL,
  [start_schedule] datetime,
  [end_schedules] datetime[null],
  [physiotherapist_id] integer NOT NULL,
  [patients_id] integer NOT NULL,
  [services_id] integer NOT NULL,
  [payments_methods_id] integer UNIQUE NOT NULL,
  [schedules_status_id] integer NOT NULL
)
GO

CREATE TABLE [payments_methods] (
  [id] integer PRIMARY KEY NOT NULL IDENTITY(1, 1),
  [description] nvarchar(255) NOT NULL
)
GO

CREATE TABLE [payments] (
  [id] integer PRIMARY KEY NOT NULL IDENTITY(1, 1),
  [schedules_id] integer NOT NULL,
  [payments_status_id] integer NOT NULL,
  [payments_methods_id] integer NOT NULL,
  [status] nvarchar(255) NOT NULL,
  [value] float NOT NULL
)
GO

CREATE TABLE [payments_status] (
  [id] integer PRIMARY KEY NOT NULL IDENTITY(1, 1),
  [description] varchar(20) NOT NULL
)
GO

CREATE TABLE [schedules_status] (
  [id] integer PRIMARY KEY NOT NULL IDENTITY(1, 1),
  [description] varchar(20) NOT NULL
)
GO

CREATE TABLE [cancellation_reasons] (
  [id] integer PRIMARY KEY NOT NULL IDENTITY(1, 1),
  [description] varchar(20) NOT NULL,
  [schedules_id] integer NOT NULL
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
