CREATE FUNCTION dbo.countSchedules(@Canceled BIT)
RETURNS INT
AS
BEGIN
    DECLARE @Count INT;

    IF @Canceled = 1
    BEGIN
        SELECT @Count = COUNT(*)
        FROM schedules
        WHERE schedules_status_id IN (14, 15, 10);
    END
    ELSE
    BEGIN
        SELECT @Count = COUNT(*)
        FROM schedules
        WHERE schedules_status_id NOT IN (14, 15, 10);
    END

    RETURN @Count;
END;