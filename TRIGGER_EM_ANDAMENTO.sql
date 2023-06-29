/*Muda o status_status_id para 3 (Em andamento)*/
CREATE TRIGGER alterScheduleStatusEmAndamento ON schedules
AFTER UPDATE
AS
BEGIN
    IF UPDATE(start_service)
    BEGIN
        UPDATE schedules
        SET schedules.schedules_status_id = 3
        FROM schedules
        INNER JOIN inserted on inserted.id = schedules.id;
    END;
END;
