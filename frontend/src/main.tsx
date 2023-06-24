import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import router from './modules/router/routes';
import Theme from './core/presenter/theme.config';
import { ScheduleProvider } from './modules/schedule/presenter/store/schedule_store';
import './main.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={Theme}>
      <ScheduleProvider>
        <RouterProvider router={router} />
      </ScheduleProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
