import React, { useEffect, MutableRefObject } from "react"

export function useOnClickOutside(
  callback: () => void,
  ref: MutableRefObject<HTMLElement | null>,
  isOpen: boolean
) {
  useEffect(() => {
    function handler(event: MouseEvent | TouchEvent) {
      isOpen && ref.current &&
      event.target instanceof Element &&
      ref.current.id === event.target.id &&
      callback()
    }
    window.addEventListener('mousedown', handler)
    window.addEventListener('touchstart', handler)
    return () => {
      window.removeEventListener('mousedown', handler)
      window.removeEventListener('touchstart', handler)
    }
  }, [callback, ref, isOpen])
}
