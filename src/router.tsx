import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import StatusPage from './pages/StatusPage';
import AllPaymentsPage from './pages/AllPaymentsPage';
import RequestDemoForm from './components/RequestDemoForm';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        path: '',
        Component: RequestDemoForm,
      },
      {
        path: 'payment', // Handles query params like ?status=Success&txnid=1234...
        Component: StatusPage,
      },
      {
        path: 'allpayments', // Shows all payment transactions
        Component: AllPaymentsPage,
      },
    ],
  },
]);
