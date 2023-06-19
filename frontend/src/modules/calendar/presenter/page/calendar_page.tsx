import React, { useContext } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import ptLocale from '@fullcalendar/core/locales/pt-br';
import { Box, useColorModeValue } from '@chakra-ui/react';
import '../fullcalendar_override.scss';
import { ScheduleContext } from '@/modules/schedule/presenter/store/schedule_store';

const CalendarPage: React.FC = () => {
  const store = useContext(ScheduleContext);

  const onClickInDay = (info: any) => {
    console.log('On click event', info);

    store.isOpen = true;
  };

  return (
    <>
      <Box px={2} py={2} className={useColorModeValue('fc-white', 'fc-dark')}>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          locale={ptLocale}
          dateClick={onClickInDay}
        />
      </Box>
    </>
  );
};

export default CalendarPage;
