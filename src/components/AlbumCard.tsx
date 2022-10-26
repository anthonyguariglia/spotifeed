import React, { FC } from 'react'
import { Image, MediaType } from '../types/types'

const getDaysSinceRelease = (releaseDate: string): string => {
  const todaysDate = new Date()

  const differenceInDays = Math.floor((todaysDate.getTime() - new Date(releaseDate).getTime()) / (1000 * 3600 * 24))

  if (differenceInDays < 1) {
    return 'Today'
  } else if (differenceInDays === 1) {
    return 'Yesterday'
  } else if (differenceInDays > 1 && differenceInDays < 30) {
    return `${differenceInDays} days ago`
  } else if (differenceInDays >= 30 && differenceInDays < 60) {
    return '1 month ago'
  } else {
    return `${Math.floor(differenceInDays / 30)} months ago`
  }
}

const AlbumCard: FC<MediaType> = ({ title, artists, releaseDate, images }: MediaType) => {

  return (
    <>
        <div data-component='AlbumCard-background' className='flex bg-black mx-6 mt-4 mb-6 h-64 rounded-2xl'>
          <img src={images[0].url} className='h-52 mx-6 my-auto' />
          <div className='flex flex-col '>
            <span className='text-gray-400 text-lg mt-8'>{getDaysSinceRelease(releaseDate)}</span>
            <span className='text-white text-4xl mt-24'>{title}</span>
            <span className='text-gray-400 text-2xl'>{artists[0].name}</span>
          </div>
        </div>
    </>
  )
}

export default AlbumCard
