3-Quais são os serviços mais solicitados pelos pacientes?
Antes da criação de índices:

SELECT Services.description, COUNT(*) AS TotalSolicitacoes
FROM Schedules
INNER JOIN Services ON Schedules.Schedules_Services_id = Services.id
GROUP BY Services.description
ORDER BY TotalSolicitacoes DESC;

Após a criação de índices:

CREATE NONCLUSTERED INDEX idx_Schedules_SchedulesServices
ON Schedules (Schedules_Services_id);

SELECT Services.description, COUNT(*) AS TotalSolicitacoes
FROM Schedules WITH (INDEX(idx_Schedules_SchedulesServices))
INNER JOIN Services ON Schedules.Schedules_Services_id = Services.id
GROUP BY Services.description
ORDER BY TotalSolicitacoes DESC;