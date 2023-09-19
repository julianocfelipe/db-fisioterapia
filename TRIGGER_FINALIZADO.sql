/*Muda o status_status_ir para 4 (Finalizado)*/
CREATE TRIGGER alterScheduleStatusFinalizado ON schedules
AFTER UPDATE
AS
BEGIN
    IF UPDATE(end_service)
    BEGIN
        UPDATE schedules
        SET schedules.schedules_status_id = 4
        FROM schedules
        INNER JOIN inserted on inserted.id = schedules.id;
    END;
END;
------