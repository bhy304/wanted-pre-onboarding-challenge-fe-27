import { createBrowserRouter } from 'react-router-dom'
// Layout
import TodoLayout from '@/components/layout/todo'
import AuthLayout from '@/components/layout/auth'
// Page
import NotFoundPage from '@/pages/not-found'
import LoginPage from '@/pages/login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <TodoLayout />,
    children: [
      {
        index: true,
        element: <div>Todo Main</div>,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'signup',
        element: <div>Signup</div>,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

export default router
