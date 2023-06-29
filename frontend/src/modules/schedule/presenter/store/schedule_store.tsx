import { useStore } from '@/modules/shared/patterns/Store';
import React, { createContext } from 'react';
import Schedule from '../../domain/entity/schedule.entity';
import { DateTime } from 'luxon';

class Store {
  isOpen = false;
  step = 1;
  progress = 33.33;
  schedules: Schedule[] = [];
  schedule_date = DateTime.now().toFormat("yyyy-MM-dd'T'hh:mm");
  submitting = false;
  success = false;
  error = "";
}

const ScheduleContext = createContext<Store>(new Store());

const ScheduleProvider: React.FC<any> = ({ children }) => {
  const store = useStore<Store>(new Store());

  return <ScheduleContext.Provider value={store}>{children}</ScheduleContext.Provider>;
};

export { ScheduleContext, ScheduleProvider };
