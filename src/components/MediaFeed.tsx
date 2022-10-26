import React, { FC } from "react"
import { MediaType } from "../types/types"
import AlbumCard from "./AlbumCard"

type FeedProps = {
  readonly albums: readonly MediaType[]
}

const MediaFeed: FC<FeedProps> = ({ albums }: FeedProps) => {
  return (
    <div className='bg-neutral-900 py-2 rounded-2xl overflow-y-scroll max-h-screen mb-8' >
      {albums.map(album => <AlbumCard {...album} />)}
    </div>
  )
}

export default MediaFeed
