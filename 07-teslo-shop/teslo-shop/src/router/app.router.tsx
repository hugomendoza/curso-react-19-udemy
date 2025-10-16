import { lazy } from 'react';

import { createBrowserRouter, Navigate } from 'react-router';
import { ShopLayout } from '../shop/layouts/ShopLayout';
import { HomePage } from '../shop/pages/home/HomePage';
import { ProductPage } from '../shop/pages/product/ProductPage';
import { GenderPage } from '../shop/pages/gender/GenderPage';
import { LoginPage } from '../auth/pages/login/LoginPage';
import { RegisterPage } from '../auth/pages/register/RegisterPage';
import { DashboardPage } from '../admin/pages/dashboard/DashboardPage';
import { AdminProductsPage } from '../admin/pages/products/AdminProductsPage';
import { AdminProductPage } from '../admin/pages/product/AdminProductPage';
import {
  AdminRoute,
  NotAuthenticatedRoute,
} from '@/components/routes/ProtectedRoutes';

const AdminLayout = lazy(() => import('../admin/layouts/AdminLayout'));
const AuthLayout = lazy(() => import('../auth/layouts/AuthLayout'));

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <ShopLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'product/:idSlug',
        element: <ProductPage />,
      },
      {
        path: 'gender/:gender',
        element: <GenderPage />,
      },
    ],
  },

  {
    path: '/auth',
    element: (
      <NotAuthenticatedRoute>
        <AuthLayout />
      </NotAuthenticatedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/auth/login" />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },

  {
    path: '/admin',
    element: (
      <AdminRoute>
        <AdminLayout />
      </AdminRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: 'products',
        element: <AdminProductsPage />,
      },
      {
        path: 'products/:id',
        element: <AdminProductPage />,
      },
    ],
  },

  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);
