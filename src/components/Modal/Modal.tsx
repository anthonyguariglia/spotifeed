import React, { ReactNode, useEffect, useRef, MutableRefObject } from 'react'
import classNames from 'classnames'
import { useOnClickOutside } from '../../helpers/useOnClickOutside'
import { Button } from '..'

export type ModalProps = {
  readonly isOpen: boolean
  readonly setIsOpen?: (val: boolean) => void
  readonly content: ReactNode
  readonly title: string
  readonly headerBackground?: string
  readonly cta?: ReactNode
}

export type ModalWrapperProps = {
  readonly className?: string
  readonly children: ReactNode
  readonly onClick: (callback: () => void, ref: MutableRefObject<HTMLElement | null>, isOpen: boolean) => void
  readonly cta?: ReactNode
  readonly headerText?: string
  readonly closeBtn?: ReactNode
  readonly content?: ReactNode
  readonly headerBackground?: string
  readonly isOpen: boolean
}

export type ModalContentProps = {
  readonly className?: string
  readonly children: ReactNode
}

export type ModalHeaderProps = {
  readonly headerText: string
  readonly backgroundColor?: string
  readonly textColor?: string
}

export type ModalFooterProps = {
  readonly cta: ReactNode
  readonly closeBtn: ReactNode
}

const GRAY_BACKGROUND = '#272727'


const ModalContent = ({ className = '', children }: ModalContentProps) => {
  const additionalClasses = classNames({
    'flex justify-center self-center z-10 py-8': true
  }, className)
  return (
    <div className={additionalClasses} onClick={() => null} data-component='ModalContent' >
      {children}
    </div>
  )
}

const ModalHeader = ({ headerText, backgroundColor = 'bg-orange-200', textColor = '' }: ModalHeaderProps) =>  (
  <div className={`flex flex-row items-center min-h-[60px] w-full rounded-t-md relative bg-[${GRAY_BACKGROUND}]`} data-component='ModalHeader' >
    <span className={`mx-auto text-white ${textColor} p-4`}>{headerText}</span>
  </div>
)

const ModalFooter = ({ cta, closeBtn }: ModalFooterProps) => (
  <div className={`relative min-h-[70px] bg-[${GRAY_BACKGROUND}] flex rounded-b-2xl shadow-2xl`} data-component='ModalFooter'>
    <div className=' flex flex-row items-center'>
      <span className='flex absolute right-24 text-black bg-green-500 rounded-3xl px-4 my-6'>{cta}</span>
      <span className='flex absolute right-3 text-black bg-white rounded-3xl px-4 my-6'>{closeBtn}</span>
    </div>
  </div>
)

const ModalWrapper = ({ className, children, onClick, headerText = '', closeBtn, content, cta, headerBackground, isOpen }: ModalWrapperProps) => {
  const additionalClasses = classNames({
    'bg-[#272727] flex flex-col justify-center self-center min-w-[400px] max-h-[600px] z-2 rounded-md': true
  }, className)

  return (
    <div className={additionalClasses} data-component='ModalWrapper' id={`${headerText.concat('-')}-modalContent`} >
      <ModalHeader headerText={headerText} backgroundColor={headerBackground} />
      <ModalContent children={children} />
      <ModalFooter cta={cta} closeBtn={closeBtn} />
    </div>
  )
}



export const Modal = ({ isOpen, setIsOpen, content, title = '', headerBackground = '#FFFFFF', cta }: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null)
  useOnClickOutside(() => setIsOpen && setIsOpen(!isOpen), ref, isOpen)

  const classes = classNames({
    // 'flex bg-gray-200 centered shadow-2xl bg-opacity-50 duration-300 transition ease-in-out absolute h-full w-full top-0 left-0 justify-self-center': isOpen && !content,
    'flex bg-black centered shadow-2xl bg-opacity-80 duration-300 transition ease-in-out absolute h-full w-full top-0 left-0 justify-self-center flex justify-center align-center bg-black': isOpen && content,
    'hidden duration-300 transition ease-in-out ': !isOpen
  })

  const closeButton = <Button onClick={() => setIsOpen && setIsOpen(!isOpen)} buttonText='Close'/>

  return (
    <div className={classes} id={`${title.replace(' ', '-')}-modalWrapper`} ref={ref} >
      <ModalWrapper onClick={useOnClickOutside} isOpen children={content} headerText={title} cta={cta} closeBtn={closeButton} headerBackground={headerBackground} />
    </div>
  )
}
