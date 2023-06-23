import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar/navbar';
import ScheduleModal from '@/modules/schedule/presenter/modal/shedule_modal';

const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <ScheduleModal />
    </>
  );
};

export default Layout;
