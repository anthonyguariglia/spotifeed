import React from "react"

type FeedHeaderProps  = {
  heading: string
}

export function FeedHeader ({ heading }: FeedHeaderProps) {
  return (
    <div className='bg-neutral-900 text-2xl text-center text-white rounded-2xl py-4 my-4' >
      {heading}
    </div>
  )
}
