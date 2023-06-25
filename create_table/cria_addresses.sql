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