CREATE TABLE [patients] (
  [id] int PRIMARY KEY IDENTITY(1, 1),
  [name] varchar(50),
  [birthday] date,
  [cpf] char(11),
  [gender] char(1),
  [address_id] int
)
GO

ALTER TABLE [patients] ADD FOREIGN KEY ([address_id]) REFERENCES [addresses] ([id])
GO
