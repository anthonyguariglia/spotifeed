import React, { FC } from "react"
import { PlaylistType } from "../types/types"
import Button from "./Button"
import Playlist from "./Playlist"

type NavBarProps = {
  items: readonly PlaylistType[]
}

const NavBar: FC<NavBarProps> = ({ items }: NavBarProps) => {
  return (
    <div className='bg-neutral-900 rounded-2xl mx-4 py-4 px-3'>
      <div className='mb-2' >
        <Button buttonText='Get Latest Tracks' backgroundColor='bg-green-500' />
      </div>
      <div className='mt-2'>
        <Button buttonText='New Playlist' backgroundColor='bg-orange-500' />
      </div>
      <div className='text-center text-white mt-4 text-xl'>Playlists</div>
      {items.map(item => <Playlist item={item}/>)}
    </div>
  )
}

export default NavBar