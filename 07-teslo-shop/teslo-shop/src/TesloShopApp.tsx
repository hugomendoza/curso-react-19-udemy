import { RouterProvider } from 'react-router';
import { appRouter } from './router/app.router';

export const TesloShopApp = () => {
  return <RouterProvider router={appRouter} />;
};
