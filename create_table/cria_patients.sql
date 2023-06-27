CREATE TABLE [patients] (
  [id] int PRIMARY KEY NOT NULL IDENTITY(1, 1),
  [name] varchar(50) NOT NULL,
  [birthday] date NOT NULL,
  [cpf] char(11) NOT NULL,
  [gender] char(1) NOT NULL,
  [address_id] int NOT NULL
)
GO

ALTER TABLE [patients] ADD FOREIGN KEY ([address_id]) REFERENCES [addresses] ([id])
GO