import React, { FC } from "react"

type ButtonProps = {
  readonly buttonText: string
  readonly backgroundColor?: string
  readonly border?: boolean
  readonly borderColor?: string
  readonly textColor?: string
}

const Button: FC<ButtonProps> = ({ buttonText, backgroundColor, border, borderColor, textColor }: ButtonProps) => {

  const borderClass = border ? `border ${borderColor}` : null 

  return (
    <button className={`rounded-md py-2 w-full ${backgroundColor} ${borderClass} ${textColor}`} >{buttonText}</button>
  )
}

export default Button