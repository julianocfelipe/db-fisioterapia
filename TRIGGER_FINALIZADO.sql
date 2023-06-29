/*Muda o status_status_ir para 5 (Finalizado)*/
CREATE TRIGGER alterScheduleStatusFinalizado ON schedules
AFTER INSERT
AS
BEGIN
    IF (SELECT inserted.end_schedules FROM inserted) IS NOT NULL
    BEGIN
        UPDATE schedules
        SET schedules_status_id = 4
        WHERE id = (SELECT inserted.end_schedules FROM inserted);
    END;
END;
