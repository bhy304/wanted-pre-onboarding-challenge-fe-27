import { Outlet } from 'react-router-dom'

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
    </>
  )
}
export default TodoLayout
