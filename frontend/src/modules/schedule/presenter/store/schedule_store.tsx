import { useStore } from '@/modules/shared/patterns/Store';
import React, { createContext } from 'react';

interface Store {
  isOpen: boolean;
  step: number;
  progress: number;
}

const ScheduleContext = createContext<Store>({
  isOpen: false,
  step: 1,
  progress: 33.33,
});

const ScheduleProvider: React.FC<any> = ({ children }) => {
  const store = useStore<Store>({
    isOpen: false,
    step: 1,
    progress: 33.33,
  });

  return <ScheduleContext.Provider value={store}>{children}</ScheduleContext.Provider>;
};

export { ScheduleContext, ScheduleProvider };
