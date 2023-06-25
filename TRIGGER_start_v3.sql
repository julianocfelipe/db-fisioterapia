CREATE TRIGGER alterScheduleStatusStart ON schedules
AFTER INSERT
AS
BEGIN
    IF (SELECT inserted.start_schedule FROM inserted) IS NOT NULL
    BEGIN
        UPDATE schedules
        SET schedules_status_id = 2
        WHERE id = (SELECT inserted.start_schedule FROM inserted);
    END;
END;