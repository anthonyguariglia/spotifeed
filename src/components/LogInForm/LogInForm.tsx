import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { Resolver, useForm } from 'react-hook-form'
import logIn from '../../api/logIn'
import { UserContext } from '../../utils/context';

type FormValues = {
  username: string;
  password: string;
}

type LogInFormProps = {
  readonly onSuccess: (val: boolean) => void
}

export function LogInForm ({ onSuccess }: LogInFormProps) {
  const [ showErrorMessage, setShowErrorMessage ] = useState(false)
  const { state, dispatch } = useContext(UserContext)

  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValues>()

  const onSubmit = handleSubmit((data) => logIn({ email: data.username, password: data.password, state, dispatch }))

  useEffect(() => {
    !!state.token && setTimeout(() => onSuccess(false), 250)
  }, [state.token])

  return (
    <form onSubmit={onSubmit} id='LoginForm'>
      <div className='flex justify-center flex-col min-w-[300px]'>
        <input className='flex flex-col rounded-lg p-4 my-2 bg-gray-200' {...register('username')} placeholder='Username' />
        <input className='rounded-lg p-4 my-2 bg-gray-200' type='password' {...register('password')} placeholder='Password'/>
        {errors?.username && <p className='text-red-500 mx-auto'>{errors.username.message}</p>}
      </div>
    </form>
  )
}
