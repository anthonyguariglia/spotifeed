import React, { useCallback, useEffect } from "react"

type ButtonProps = {
  readonly onClickCta?: () => void
  readonly buttonText: string
  readonly backgroundColor?: string
  readonly border?: boolean
  readonly borderColor?: string
  readonly textColor?: string
  readonly type?: 'button' | 'submit'
  readonly form?: string
}

export function Button ({ onClickCta, buttonText, backgroundColor, border, borderColor, textColor, type = 'button', form = '' }: ButtonProps) {

  const borderClass = border ? `border ${borderColor}` : null 

  const handler = () => {
    onClickCta && onClickCta()
  }

  return (
    <button form={form} className={`rounded-md py-2 w-full ${backgroundColor} ${borderClass} ${textColor}`} onClick={handler} type={type}>{buttonText}</button>
  )
}