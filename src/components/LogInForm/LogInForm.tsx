import React from 'react'
import { FieldErrors, UseFormHandleSubmit, UseFormRegister, useForm } from 'react-hook-form'
import { FormValues } from './LogInFormContent'

type LogInFormProps = {
  onSubmit: any
  register: UseFormRegister<FormValues>
  errors: FieldErrors<FormValues>
}

export function LogInForm ({ onSubmit, register, errors }: LogInFormProps ) {

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