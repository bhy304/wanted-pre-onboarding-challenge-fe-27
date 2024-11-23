import { Link } from 'react-router-dom'
import { Button } from '@ui'

const NotFoundPage = () => {
  return (
    <main className='w-screen h-screen flex flex-col justify-center items-center gap-6'>
      <h1 className='text-6xl'>페이지를 찾을 수 없어요 🥹</h1>
      <h2 className='text-3xl text-slate-400'>404 Page Not Found</h2>
      <Button>
        <Link to='/'>돌아가기</Link>
      </Button>
    </main>
  )
}
export default NotFoundPage
