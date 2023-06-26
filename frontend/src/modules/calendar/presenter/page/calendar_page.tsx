import React, { useContext, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import ptLocale from '@fullcalendar/core/locales/pt-br';
import { Box, useColorModeValue } from '@chakra-ui/react';
import '../fullcalendar_override.scss';
import { ScheduleContext } from '@/modules/schedule/presenter/store/schedule_store';

const CalendarPage: React.FC = () => {
  const store = useContext(ScheduleContext);

  const onClickInDay = (info: any) => {
    store.isOpen = true;
    store.selected_date = info.date;
  };

  useEffect(() => {
    console.log('useEffect', store.schedules);
  }, [store.schedules]);

  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
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
            const result = { title: schedule.patient.name, date: schedule.date };

            return result;
          })}
        />
      </Box>
    </>
  );
};

export default CalendarPage;
