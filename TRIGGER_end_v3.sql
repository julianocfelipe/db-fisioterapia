CREATE TRIGGER alterScheduleStatusEnd ON schedules
AFTER INSERT
AS
BEGIN
    IF (SELECT inserted.end_schedules FROM inserted) IS NOT NULL
    BEGIN
        UPDATE schedules
        SET schedules_status_id = 3
        WHERE id = (SELECT inserted.end_schedules FROM inserted);
    END;
END;