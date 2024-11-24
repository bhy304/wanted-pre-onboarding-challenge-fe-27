import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { useToast } from '@/hooks/use-toast'
import { signup } from '@/api/services/auth'
import { ErrorResponse } from '@/interfaces/http'
import { AUTH_VALIDATION_MESSAGE } from '@/enums'
import formSchema from '@/lib/form-schema'
import AuthForm from '@/components/forms'

const SignupForm = () => {
  const { toast } = useToast()
  const navigate = useNavigate()

  const onSubmit = async ({
    email,
    password,
  }: z.infer<typeof formSchema>): Promise<void> => {
    try {
      const response = await signup({ email, password })

      console.log('✅ 회원가입 :>', response)

      if (response.status === 200 && response.data.token) {
        toast({
          title: AUTH_VALIDATION_MESSAGE.SUCCESS_SIGNUP,
        })

        navigate('/auth/login')
      }
    } catch (err: unknown) {
      const { message } = err as ErrorResponse

      if (message) {
        toast({
          variant: 'destructive',
          title: AUTH_VALIDATION_MESSAGE.EXIST_USER,
        })
      }

      console.error(err)
    }
  }
  return <AuthForm type='SIGNUP' onSubmit={onSubmit} />
}

export default SignupForm
