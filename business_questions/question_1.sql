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