import { useStore } from '@/modules/shared/patterns/Store';
import React, { createContext, useState } from 'react';

interface Store {
  isOpen: boolean;
}

const ScheduleContext = createContext<Store>({
  isOpen: false,
});

const ScheduleProvider: React.FC<any> = ({ children }) => {
  const store = useStore<Store>({
    isOpen: false,
  });

  return <ScheduleContext.Provider value={store}>{children}</ScheduleContext.Provider>;
};

export { ScheduleContext, ScheduleProvider };
