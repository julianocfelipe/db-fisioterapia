4-Quantos pacientes agendaram consultas para um determinado fisioterapeuta em um período de tempo específico?
Antes da criação de índices:

SELECT COUNT(*) AS TotalAgendamentos
FROM Schedules
WHERE Physiotherapist_id = [id_fisioterapeuta]
  AND schedule_date BETWEEN '01-01-2023' AND '31-12-2023';

Após a criação de índices:

CREATE NONCLUSTERED INDEX idx_Schedules_Physiotherapist_StartSchedule
ON Schedules (Physiotherapist_id, schedule_date);

SELECT COUNT(*) AS TotalAgendamentos
FROM Schedules WITH (INDEX(idx_Schedules_Physiotherapist_StartSchedule))
WHERE Physiotherapist_id = [id_fisioterapeuta]
  AND schedule_date BETWEEN '01-01-2023' AND '31-12-2023';