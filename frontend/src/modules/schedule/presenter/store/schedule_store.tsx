import { useStore } from '@/modules/shared/patterns/Store';
import React, { createContext } from 'react';
import Schedule from '../../domain/entity/schedule.entity';
import { DateTime } from 'luxon';

class Store {
  schedules: Schedule[] = [];
  loading = false;
  
  // modal information
  step = 1;
  isOpen = false;
  progress = 33.33;
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
