
CREATE TRIGGER alterScheduleStatus ON services
AFTER INSERT
AS
BEGIN
    IF (SELECT inserted.schedules_id FROM inserted) IS NOT NULL
    BEGIN
        UPDATE schedules
        SET status = 'Confirmado'
        WHERE id = (SELECT inserted.schedules_id FROM inserted);
    END;
END;


select * from schedules
select * from services

insert into services values(01,'AAAAA',01)
insert into schedules values(01,'Joelho torto','Joelho','Em andamento',getdate(), getdate(),01,01,01,01)
