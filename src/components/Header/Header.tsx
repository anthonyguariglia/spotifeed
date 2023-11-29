import React from 'react'

type HeaderProps = {

}

export function Header ({ }: HeaderProps) {
  return (
    <div className='grid grid-flow-col grid-cols-12 h-[100px] w-full bg-black text-white text-4xl'>
      <div className='col-span-3 text-center my-auto'>
        <span className='uppercase font-bold align-middle justify-center'>spotifeed</span>
      </div>
    </div>
  )
}
