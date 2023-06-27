CREATE TABLE [physiotherapists] (
  [id] int PRIMARY KEY NOT NULL IDENTITY(1, 1),
  [name] varchar(50) NOT NULL,
  [cpf] char(11) NOT NULL,
  [crf] varchar(15) NOT NULL,
  [phone] varchar(11) NOT NULL,
  [address_id] int NOT NULL
)
GO

ALTER TABLE [physiotherapists] ADD FOREIGN KEY ([address_id]) REFERENCES [addresses] ([id])
GO