import React, { useEffect } from "react"

type ButtonProps = {
  readonly onClick?: () => void
  readonly buttonText: string
  readonly backgroundColor?: string
  readonly border?: boolean
  readonly borderColor?: string
  readonly textColor?: string
  readonly type?: 'button' | 'submit'
  readonly form?: string
}

export function Button ({ onClick, buttonText, backgroundColor, border, borderColor, textColor, type = 'button', form = '' }: ButtonProps) {

  const borderClass = border ? `border ${borderColor}` : null 

  return (
    <button form={form} className={`rounded-md py-2 w-full ${backgroundColor} ${borderClass} ${textColor}`} onClick={() => onClick && onClick()} type={type}>{buttonText}</button>
  )
}