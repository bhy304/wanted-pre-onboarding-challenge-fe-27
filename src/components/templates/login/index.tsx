import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { useToast } from '@/hooks/use-toast'
import { login } from '@/api/services/auth'
import { ErrorResponse } from '@/interfaces/http'
import { AUTH_VALIDATION_MESSAGE } from '@/enums'
import { authFormSchema } from '@/lib/form-schema'

import AuthForm from '@/components/forms'

const LoginForm = () => {
  const { toast } = useToast()
  const navigate = useNavigate()

  const onSubmit = async ({
    email,
    password,
  }: z.infer<typeof authFormSchema>): Promise<void> => {
    try {
      const response = await login({ email, password })

      console.log('로그인 ➡️ ', response)

      if (response.status === 200 && response.data.token) {
        navigate('/')
      }
    } catch (err: unknown) {
      const { message } = err as ErrorResponse

      if (message) {
        toast({
          variant: 'destructive',
          title: AUTH_VALIDATION_MESSAGE.USER_NOT_FOUND,
        })
      }

      console.error(err)
    }
  }

  return <AuthForm type='LOGIN' onSubmit={onSubmit} />
}

export default LoginForm
