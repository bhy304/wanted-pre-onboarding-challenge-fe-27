import { createBrowserRouter } from 'react-router-dom'
// Layout
import TodoLayout from '@/components/layout/todo'
import AuthLayout from '@/components/layout/auth'
// Page
import NotFoundPage from '@/pages/not-found'
import LoginPage from '@/pages/login'
import SignupPage from '@/pages/signup'
import TodoPage from '@/pages/todo'

const router = createBrowserRouter([
  {
    path: '/',
    element: <TodoLayout />,
    children: [
      {
        index: true,
        element: <TodoPage />,
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
        element: <SignupPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

export default router
