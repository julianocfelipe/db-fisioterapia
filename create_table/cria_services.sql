CREATE TABLE [services] (
  [id] int PRIMARY KEY NOT NULL IDENTITY(1, 1),
  [description] varchar(50) NOT NULL,
  [price] decimal(6,2) NOT NULL
)
GO