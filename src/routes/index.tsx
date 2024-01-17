import { createBrowserRouter } from 'react-router-dom';
import {
  LayoutPage,
  HomePage,
  AboutPage,
  CareerPage,
  ServicesPage,
  ContactPage,
} from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'career',
        element: <CareerPage />,
      },
      {
        path: 'services',
        element: <ServicesPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
    ],
  },
]);
