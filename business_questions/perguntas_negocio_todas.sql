1- Qual é o valor médio pago por serviço pelos pacientes?

Antes da criação de índices:

SELECT Services.description, AVG(Payments.payments_service) AS ValorMedioPago
FROM Schedules
INNER JOIN Services ON Schedules.Schedules_Services_id = Services.id
INNER JOIN Payments ON Schedules.id = Payments.Schedules_id
GROUP BY Services.description;

Após a criação de índices:


CREATE NONCLUSTERED INDEX idx_Schedules_Payments
ON Schedules (Schedules_Services_id)
INCLUDE (id);
CREATE NONCLUSTERED INDEX idx_Payments_Schedules
ON Payments (Schedules_id);


SELECT Services.description, AVG(Payments.payments_service) AS ValorMedioPago
FROM Schedules WITH (INDEX(idx_Schedules_SchedulesServices))
INNER JOIN Services ON Schedules.Schedules_Services_id = Services.id
INNER JOIN Payments WITH (INDEX(idx_Payments_Schedules)) ON Schedules.id = Payments.Schedules_id
GROUP BY Services.description;

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

4-Quantos pacientes agendaram consultas para um determinado fisioterapeuta em um período de tempo específico?
Antes da criação de índices:

SELECT COUNT(*) AS TotalAgendamentos
FROM Schedules
WHERE Physiotherapist_id = [id_fisioterapeuta]
  AND Start_service BETWEEN '01-01-2023' AND '31-12-2023';

Após a criação de índices:

CREATE NONCLUSTERED INDEX idx_Schedules_Physiotherapist_StartSchedule
ON Schedules (Physiotherapist_id, start_service);

SELECT COUNT(*) AS TotalAgendamentos
FROM Schedules WITH (INDEX(idx_Schedules_Physiotherapist_StartSchedule))
WHERE Physiotherapist_id = [id_fisioterapeuta]
  AND Start_service BETWEEN '01-01-2023' AND '31-12-2023';