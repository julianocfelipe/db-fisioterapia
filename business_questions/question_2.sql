2-Quais são os fisioterapeutas que possuem o maior número de agendamentos?
Antes da criação de índices:

SELECT Physiotherapists.name, COUNT(*) AS TotalAgendamentos
FROM Schedules
INNER JOIN Physiotherapists ON Schedules.Physiotherapist_id = Physiotherapists.id
GROUP BY Physiotherapists.name
ORDER BY TotalAgendamentos DESC;

-Após a criação de índices:

CREATE NONCLUSTERED INDEX idx_Schedules_Physiotherapist
ON Schedules (Physiotherapist_id);

SELECT Physiotherapists.name, COUNT(*) AS TotalAgendamentos
FROM Schedules WITH (INDEX(idx_Schedules_Physiotherapist))
INNER JOIN Physiotherapists ON Schedules.Physiotherapist_id = Physiotherapists.id
GROUP BY Physiotherapists.name
ORDER BY TotalAgendamentos DESC;