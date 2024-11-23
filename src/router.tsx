import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Main</div>,
    children: [],
  },
  {
    path: '/auth',
    element: <div>Auth</div>,
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
