import { Link, Outlet } from 'react-router-dom'

const TodoLayout = () => {
  return (
    <>
      <header className='w-full flex justify-between items-center p-4'>
        <h1>TodoApp</h1>
        <nav>
          <ul className='flex'>
            <li>로그아웃</li>
          </ul>
        </nav>
      </header>

      <main className='w-full min-h-screen flex flex-col justify-center items-center'>
        <Outlet />
      </main>

      <footer className='py-3 font-light text-center text-sm'>
        Copyright &copy; {new Date().getFullYear()}{' '}
        <Link
          to='https://github.com/bhy304'
          target='_blank'
          className='hover:text-blue-600'>
          HayeonBaek
        </Link>{' '}
        All rights reserved.
      </footer>
    </>
  )
}
export default TodoLayout
