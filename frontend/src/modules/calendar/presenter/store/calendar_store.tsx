import Schedule from '@/modules/schedule/domain/entity/schedule.entity';
import { useStore } from '@/modules/shared/patterns/Store';
import React, { createContext } from 'react';

interface Store {
  schedules: Schedule[];
}

const CalendarContext = createContext<Store>({
  schedules: [],
});

const CalendarProvider: React.FC<any> = ({ children }) => {
  const store = useStore<Store>({
    schedules: [],
  });

  return <CalendarContext.Provider value={store}>{children}</CalendarContext.Provider>;
};

export { CalendarContext, CalendarProvider };
