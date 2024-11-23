import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <main className='w-full min-h-screen flex flex-col justify-center items-center'>
      <Outlet />
    </main>
  )
}
export default AuthLayout
