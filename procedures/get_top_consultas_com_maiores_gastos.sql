CREATE PROCEDURE get_top_consultas_com_maiores_gastos
	@start_at DATETIME = NULL,
	@end_at  DATETIME = NULL,
	@top INT
AS
BEGIN
	SELECT TOP (@top) schedules.id, dbo.schedules.body, payments.value
	FROM payments
	INNER JOIN schedules ON payments.schedules_id = schedules.id
	WHERE (@start_at IS NULL OR schedules.start_service >= @start_at)
		AND (@end_at IS NULL OR schedules.end_service <= @end_at)
	ORDER BY payments.value DESC
END

exec get_top_consultas_com_maiores_gastos @start_at = null, @end_at = null, @top = 5