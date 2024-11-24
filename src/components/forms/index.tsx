import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@ui'

import { authFormSchema } from '@/lib/form-schema'

type AUTH_TYPE = 'LOGIN' | 'SIGNUP'

const LOGIN = {
  TITLE: '로그인',
  FOOTER_TITLE: '회원가입',
  FOOTER_PATH: '/auth/signup',
  FOOTER_MESSAGE: '계정이 없으신가요?',
}

const SIGNUP = {
  TITLE: '회원가입',
  FOOTER_TITLE: '로그인',
  FOOTER_PATH: '/auth/login',
  FOOTER_MESSAGE: '계정이 있으신가요?',
}

const AuthForm = ({
  type,
  onSubmit,
}: {
  type: AUTH_TYPE
  onSubmit: ({
    email,
    password,
  }: z.infer<typeof authFormSchema>) => Promise<void>
}) => {
  const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  })

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = form

  return (
    <Card className='w-[30rem]'>
      <CardHeader>
        <CardTitle>{type === 'LOGIN' ? LOGIN.TITLE : SIGNUP.TITLE}</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-y-6'>
            <FormField
              control={control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이메일</FormLabel>
                  <FormControl>
                    <Input
                      type='email'
                      placeholder='이메일을 입력해주세요.'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>비밀번호</FormLabel>
                  <FormControl>
                    <Input
                      type='password'
                      placeholder='비밀번호를 입력해주세요.'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' className='w-full' disabled={!isValid}>
              {type === 'LOGIN' ? LOGIN.TITLE : SIGNUP.TITLE}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className='justify-end'>
        <span className='text-sm mr-1 text-slate-500'>
          {type === 'LOGIN' ? LOGIN.FOOTER_MESSAGE : SIGNUP.FOOTER_MESSAGE}
        </span>
        <Button variant='link'>
          <Link to={type === 'LOGIN' ? LOGIN.FOOTER_PATH : SIGNUP.FOOTER_PATH}>
            {type === 'LOGIN' ? LOGIN.FOOTER_TITLE : SIGNUP.FOOTER_TITLE}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
export default AuthForm
