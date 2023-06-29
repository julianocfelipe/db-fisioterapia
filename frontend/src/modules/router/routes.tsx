import { createBrowserRouter } from 'react-router-dom';
import Layout from '../../core/presenter/layout/layout';
import CalendarPage from '../calendar/presenter/page/calendar_page';
import ReportPage from '../report/presenter/page/report.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <CalendarPage />,
      },
      {
        path: '/report',
        element: <ReportPage />
      }
    ],
  },
]);

export default router;
