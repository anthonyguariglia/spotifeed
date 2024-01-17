import React from 'react'
import { FieldError } from 'react-hook-form'

type LogInErrorProps = {
  readonly message?: string
}

export function LogInError ({ message }: LogInErrorProps) {
  return (
    <span className='text-red-500 text-center'>{message}</span>
  )
}
