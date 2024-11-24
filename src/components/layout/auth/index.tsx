import { Outlet } from 'react-router-dom'

import { Toaster } from '@ui'

const AuthLayout = () => {
  return (
    <>
      <main className='w-full min-h-screen flex flex-col justify-center items-center'>
        <Outlet />
      </main>
      <Toaster />
    </>
  )
}
export default AuthLayout
