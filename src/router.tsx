import { createBrowserRouter } from 'react-router-dom'
// Layout
import TodoLayout from './components/layout/todo'
import AuthLayout from './components/layout/auth'

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
        element: <div>Login</div>,
      },
      {
        path: 'signup',
        element: <div>Signup</div>,
      },
    ],
  },
  {
    path: '*',
    element: <div>Not Found Page</div>,
  },
])

export default router
