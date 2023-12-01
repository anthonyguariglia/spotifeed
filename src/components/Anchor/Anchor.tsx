import React, { useContext, useReducer, useState } from "react"
import { LogInFormContent } from "../LogInForm/LogInFormContent"
import { Button, Modal } from ".."
import { UserContext, defaultContext } from "../../utils/context"
import { reducer } from "../../utils/reducer"

export function Anchor () {
  const [ buttonText, setButtonText ] = useState('Log In')
  const [ loginModalIsOpen, setLoginModalIsOpen ] = useState(false)

  const buttonProps = {
    buttonText: buttonText,
    backgroundColor: 'bg-neutral-900',
    border: true,
    borderColor: 'border-white',
    textColor: 'text-white'
  }

  const onSubmit = () => true

  const loginCta = <Button buttonText="Log In" type='submit' form="LoginForm" onClick={onSubmit} />

  return (
    <div className='bg-neutral-900 rounded-2xl m-4 p-3 flex justify-center' >
      <Button {...buttonProps} onClick={() => setLoginModalIsOpen(!loginModalIsOpen)} />
      <Modal isOpen={loginModalIsOpen} setIsOpen={setLoginModalIsOpen} title='Log In' cta={loginCta} content={<LogInFormContent onSuccess={setLoginModalIsOpen} />} />
    </div>
  )
}
