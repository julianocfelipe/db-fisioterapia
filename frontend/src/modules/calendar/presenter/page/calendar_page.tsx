import React, { useContext, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import ptLocale from '@fullcalendar/core/locales/pt-br';
import { Box, useColorModeValue } from '@chakra-ui/react';
import '../fullcalendar_override.scss';
import { ScheduleContext } from '@/modules/schedule/presenter/store/schedule_store';
import ScheduleService from '../../infra/services/schedule.service';
import useConstructor from '@/modules/shared/patterns/Constructor';
import Schedule from '@/modules/schedule/domain/entity/schedule.entity';

const CalendarPage: React.FC = () => {
  const store = useContext(ScheduleContext);

  const onClickInDay = (info: any) => {
    store.isOpen = true;
    store.schedule_date = Schedule.toControllerDate(info.date);
    store.submitting = false;
    store.success = false;
    store.error = '';
  };

  const loadSchedules = async () => {
    const schedules = await ScheduleService.build().index({});

    store.schedules = schedules || [];
  };

  useConstructor(() => {
    loadSchedules();
  });

  function renderEventContent(eventInfo) {
    return (
      <>
        <div>
          <b>{eventInfo.timeText}</b>
          <i>{eventInfo.event.title}</i>
        </div>
      </>
    );
  }

  return (
    <>
      <Box px={2} py={2} className={useColorModeValue('fc-white', 'fc-dark')}>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          initialView="dayGridMonth"
          locale={ptLocale}
          eventContent={renderEventContent}
          dateClick={onClickInDay}
          events={store.schedules.map((schedule) => {
            const result = { title: schedule.patient.name, date: schedule.schedule_date };

            return result;
          })}
        />
      </Box>
    </>
  );
};

export default CalendarPage;
