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