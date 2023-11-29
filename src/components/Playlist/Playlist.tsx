import { Link } from "gatsby"
import React from "react"
import { PlaylistType } from "../../types/types"

type PlaylistProps = {
  readonly item: PlaylistType
}

export function Playlist ({ item }: PlaylistProps) {
  return (
    <div className='bg-black text-neutral-400 rounded-2xl p-4 mt-4 items-center'>
      <p>{item.name}<Link to={`/playlists/${item.name}`} /></p>
    </div>
  )
}
