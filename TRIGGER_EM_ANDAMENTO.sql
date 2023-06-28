/*Muda o status_status_id para 7 (Em andamento)*/
CREATE TRIGGER alterScheduleStatusEmAndamento ON schedules
AFTER INSERT
AS
BEGIN
    IF (SELECT inserted.start_schedule FROM inserted) IS NOT NULL
    BEGIN
        UPDATE schedules
        SET schedules_status_id = 7
        WHERE id = (SELECT inserted.start_schedule FROM inserted);
    END;
END;
