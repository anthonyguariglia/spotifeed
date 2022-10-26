import React, { FC } from "react"
import { PlaylistType } from "../types/types"

type PlaylistProps = {
  readonly item: PlaylistType
}

const Playlist: FC<PlaylistProps> = ({ item }: PlaylistProps) => {
  return (
    <div className='bg-black text-neutral-400 rounded-2xl p-4 mt-4 items-center'>
      {item.name}
    </div>
  )
}

export default Playlist