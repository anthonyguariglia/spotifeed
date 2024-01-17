import React, { useRef } from 'react'
import { GenericModalProps } from '../../types/types'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import { Modal } from '..'

export const PlaylistModal = ({ isOpen, setIsOpen }: GenericModalProps) => {
  const ref = useRef(null)
  useOnClickOutside(() => setIsOpen(!isOpen), ref, isOpen)

  return (
    <div ref={ref}>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} headerBackground="bg-gray-600" content={<div className='text-white'>Content!</div>} title='New Playlist' />
    </div>
  )
}
