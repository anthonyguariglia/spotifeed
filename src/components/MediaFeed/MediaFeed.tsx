import React from "react"
import { MediaType } from "../../types/types"
import { AlbumCard } from ".."

type FeedProps = {
  readonly albums: readonly MediaType[]
}

export function MediaFeed ({ albums }: FeedProps) {
  return (
    <div className='bg-neutral-900 py-2 rounded-2xl overflow-y-scroll max-h-screen mb-8' >
      {albums.map((album, idx) => <AlbumCard {...album} key={idx} />)}
    </div>
  )
}
