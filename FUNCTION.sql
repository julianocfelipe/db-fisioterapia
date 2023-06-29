CREATE FUNCTION GetLastScheduleDate(@patientId INT)
RETURNS DATE
AS
BEGIN
    DECLARE @lastScheduleDate DATE;
    
    SELECT @lastScheduleDate = MAX(end_services)
    FROM schedules
    WHERE patients_id = @patientId;
    
    RETURN @lastScheduleDate;
END;

