CREATE TABLE [physiotherapists] (
  [id] int PRIMARY KEY IDENTITY(1, 1),
  [name] varchar(50),
  [cpf] char(11),
  [crf] varchar(15),
  [phone] varchar(11),
  [address_id] int
)
GO
ALTER TABLE [physiotherapists] ADD FOREIGN KEY ([address_id]) REFERENCES [addresses] ([id])
GO