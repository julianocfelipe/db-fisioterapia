ALTER PROCEDURE GetPhysiotherapistsByService
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT TOP 1 p.id, p.name, COUNT(s.id) AS num_services
    FROM db_fisio_oficial.dbo.physiotherapists p
    JOIN db_fisio_oficial.dbo.schedules s ON p.id = s.physiotherapist_id
    GROUP BY p.id, p.name
    ORDER BY num_services DESC;
END;