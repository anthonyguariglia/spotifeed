import React, { FC } from "react"

type FeedHeaderProps  = {
  heading: string
}

const FeedHeader: FC<FeedHeaderProps> = ({ heading }: FeedHeaderProps) => {
  return (
    <div className='bg-neutral-900 text-2xl text-center text-white rounded-2xl py-4 my-4' >
      {heading}
    </div>
  )
}

export default FeedHeader
