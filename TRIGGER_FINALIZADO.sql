/*Muda o status_status_ir para 4 (Finalizado)*/
CREATE TRIGGER alterScheduleStatusFinalizado ON schedules
AFTER INSERT
AS
BEGIN
    IF (SELECT inserted.end_service FROM inserted) IS NOT NULL
    BEGIN
        UPDATE schedules
        SET schedules_status_id = 4
        WHERE id = (SELECT inserted.end_service FROM inserted);
    END;
END;