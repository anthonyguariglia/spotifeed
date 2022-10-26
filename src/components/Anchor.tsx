import React, { FC, useState } from "react"
import Button from "./Button"

const Anchor: FC = () => {
  const [ buttonText, setButtonText ] = useState('Log In')

  const buttonProps = {
    buttonText: buttonText,
    backgroundColor: 'bg-neutral-900',
    border: true,
    borderColor: 'border-white',
    textColor: 'text-white'
  }

  return (
    <div className='bg-neutral-900 rounded-2xl m-4 p-3 flex justify-center' >
      <Button {...buttonProps} />
    </div>
  )
}

export default Anchor
