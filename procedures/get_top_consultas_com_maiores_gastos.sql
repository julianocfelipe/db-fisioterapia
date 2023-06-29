CREATE PROCEDURE get_top_consultas_com_maiores_gastos
	@schedule_start_at DATETIME = NULL,
	@schedule_end_at  DATETIME = NULL,
	@top INT = 1
AS
BEGIN
	SELECT TOP (@top) schedules.id, services.price, services.description
		FROM services
			INNER JOIN schedules ON services.id = schedules.schedules_services_id
	WHERE (@schedule_start_at IS NULL OR schedules.start_service >= @schedule_start_at)
	AND (@schedule_end_at IS NULL OR schedules.end_service <= @schedule_end_at)
	AND schedules.id  in (
		SELECT payments.schedules_id
			FROM payments 
		WHERE payments_status_id IN (11, 2, 10)
	) 
	ORDER BY services.price DESC
END
