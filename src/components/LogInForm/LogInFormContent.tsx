import React, { ReactNode, useContext, useEffect, useReducer, useState } from 'react'
import { Resolver, useForm } from 'react-hook-form'
import { UserContext, defaultContext } from '../../utils/context';
import { logIn } from '../../api/logIn';
import { LogInForm } from './LogInForm';
import { SpotifyIFrame } from './SpotifyIFrame';
import { LogInError } from './LogInError';
import { SET_TOKEN, reducer } from '../../utils/reducer';

export type FormValues = {
  username: string;
  password: string;
}

type LogInFormProps = {
  readonly onSuccess: (val: boolean) => void
}

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


export function LogInFormContent ({ onSuccess }: LogInFormProps) {
  const [ showErrorMessage, setShowErrorMessage ] = useState(false)
  const [state, dispatch] = useReducer(reducer, defaultContext)
  const [ logInErrors, setLogInErrors ] = useState('')

  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValues>()

  const onSubmit = handleSubmit(async (data) => {
    const { redirectUrl, token } = await logIn({ email: data.username, password: data.password, setLogInErrors, state, dispatch })
    console.log(redirectUrl, token)
    dispatch({ type: SET_TOKEN, payload: token })
    redirectUrl && popItUp(redirectUrl, window.innerWidth, window.innerHeight)
  })

  useEffect(() => {
    if (!!logInErrors) {
      console.log('I have an error!')
      setShowErrorMessage(true)
    }
    setTimeout(() => console.log(logInErrors), 250)
  }, [ logInErrors ])

  return (
    <div className='flex flex-col'>
      <LogInForm onSubmit={onSubmit} register={register} errors={errors} />
      {showErrorMessage && <LogInError message={logInErrors} />}
    </div>
  )
}
