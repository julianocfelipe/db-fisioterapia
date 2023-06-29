import React, { useContext, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import ptLocale from '@fullcalendar/core/locales/pt-br';
import { Box, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Progress, useColorModeValue } from '@chakra-ui/react';
import '../fullcalendar_override.scss';
import { ScheduleContext } from '@/modules/schedule/presenter/store/schedule_store';
import ScheduleService from '../../infra/services/schedule.service';
import useConstructor from '@/modules/shared/patterns/Constructor';
import Schedule from '@/modules/schedule/domain/entity/schedule.entity';
import CalendarSchedulePopover from '../components/calendar_schedule_popover';
import ScheduleDTO from '../../domain/dto/schedules.dto';

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
    try {
      store.loading = true;

      const schedules = await ScheduleService.build().index({});

      const serializedSchedules: Schedule[] = schedules.map((item) => ScheduleDTO.toSchedule(item));

      store.schedules = serializedSchedules || [];
    } catch (error) {
      console.error(error);
    } finally {
      store.loading = false;
    }
  };

  useConstructor(() => {
    loadSchedules();
  });

  function renderEventContent(eventInfo) {
    return (
      <Popover isLazy>
        <PopoverTrigger>
          <div style={{ padding: '2px 8px', width: '100%', borderRadius: '16px' }} >
            <b style={{ marginRight: '8px' }}>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <CalendarSchedulePopover schedule={eventInfo.event.extendedProps} />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <>
      <Box px={2} py={2} className={useColorModeValue('fc-white', 'fc-dark')}>
        <Progress size="xs" isIndeterminate display={store.loading ? 'block' : 'none'} />
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          initialView="dayGridMonth"
          locale={ptLocale}
          eventContent={renderEventContent}
          dateClick={onClickInDay}
          events={store.schedules.map((schedule) => {
            const result = { title: schedule.patient?.name, date: schedule.schedule_date, extendedProps: schedule };

            return result;
          })}
        />
      </Box>
    </>
  );
};

export default CalendarPage;
