import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { Resolver, useForm } from 'react-hook-form'
import { UserContext } from '../../utils/context';
import { logIn } from '../../api/logIn';
import { LogInForm } from './LogInForm';
import { SpotifyIFrame } from './SpotifyIFrame';

export type FormValues = {
  username: string;
  password: string;
}

type LogInFormProps = {
  readonly onSuccess: (val: boolean) => void
}



export function LogInFormContent ({ onSuccess }: LogInFormProps) {
  const [ showErrorMessage, setShowErrorMessage ] = useState(false)
  const { state, dispatch } = useContext(UserContext)
  const [ showLoginForm, setShowLoginForm ] = useState(true)

  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValues>()

  function popItUp(url: string, w: number, h: number) {
    const dualScreenLeft = window.screenLeft !==  undefined ? window.screenLeft : window.screenX;
    const dualScreenTop = window.screenTop !==  undefined   ? window.screenTop  : window.screenY;

    const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    const systemZoom = width / window.screen.availWidth;
    const left = (width - w) / 2 / systemZoom + dualScreenLeft
    const top = (height - h) / 2 / systemZoom + dualScreenTop

    const newWindow = window.open(url, 'logInToSpotify',
      `
      scrollbars=yes,
      width=${w / systemZoom}, 
      height=${h / systemZoom}, 
      top=${top}, 
      left=${left}
      `
    )

    if (newWindow) {
      newWindow.focus()
    }
    return false
  }

  const onSubmit = handleSubmit(async (data) => {
    const redirectUrl = await logIn({ email: data.username, password: data.password, state, dispatch })
    redirectUrl && popItUp(redirectUrl, window.innerWidth, window.innerHeight)
    onSuccess(false)
  })

  return (
    <LogInForm onSubmit={onSubmit} register={register} errors={errors} />
  )
}
