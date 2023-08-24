/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react'
import { PATH } from '@/contants/path'

const MainLayout = lazy(() => import('@/layout/MainLayout/MainLayout'))
const HomePage = lazy(() => import('@/pages/HomePage/HomePage'))
const Contact = lazy(() => import('@/pages/Contact/Contact'))

export const routers = [
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: PATH.contact,
        element: <Contact />,
      },
    ],
  },
]
