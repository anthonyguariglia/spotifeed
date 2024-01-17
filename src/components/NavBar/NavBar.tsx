import React, { useCallback, useContext, useEffect, useState } from "react"
import { PlaylistType } from "../../types/types"
import { Button, Playlist, PlaylistModal } from ".."
import getAlbumData from "../../api/getAlbumData"
import { UserContext } from "../../utils/context"
import { useGetAlbumData } from "../../hooks/useGetAlbumData"
import { ADD_ALBUMS } from "../../utils/reducer"

type NavBarProps = {
  items: readonly PlaylistType[]
}

export function NavBar ({ items }: NavBarProps) {
  const [ playlistModalIsOpen, setPlaylistModalIsOpen ] = useState(false)
  const { state, dispatch } = useContext(UserContext)
  const [ shouldRequestData, setShouldRequestData ] = useState(false)

  const getData = useCallback(async () => {
    const albumData = await getAlbumData()
    
    console.log('dispatching')
    dispatch({ type: ADD_ALBUMS, payload: albumData })
    console.log('dispatched!')

  }, [ shouldRequestData ])

  useEffect(() => {
    console.log(state)
  }, [ state ])

  return (
    <div className='bg-neutral-900 rounded-2xl mx-4 py-4 px-3'>
      <div className='mb-2' data-component='Get-Latest-Tracks'>
        <Button buttonText='Get Latest Tracks' backgroundColor='bg-green-500' onClickCta={getData}/>
      </div>
      <div className='mt-2' data-component='New-Playlist'>
        <Button buttonText='New Playlist' backgroundColor='bg-orange-500' onClickCta={() => setPlaylistModalIsOpen(!playlistModalIsOpen)} />
        <PlaylistModal isOpen={playlistModalIsOpen} setIsOpen={setPlaylistModalIsOpen} />
      </div>
      <div className='text-center text-white mt-4 text-xl'>Playlists</div>
      {items.map((item, idx) => <Playlist item={item} key={idx} />)}
    </div>
  )
}
