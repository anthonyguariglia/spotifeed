import * as React from "react"
import type { HeadFC } from "gatsby"
import AlbumCard from "../components/AlbumCard"
import { mockAlbum, mockImage, mockPlaylist } from "../utils/mocks"
import MediaFeed from "../components/MediaFeed"
import FeedHeader from "../components/FeedHeader"
import Anchor from "../components/Anchor"
import NavBar from "../components/NavBar"

const IndexPage = () => {
  return (
    <div className='flex flex-row bg-black w-full'>
      <div className='flex flex-col w-1/5' >
        <Anchor />
        <NavBar items={[ mockPlaylist, mockPlaylist, mockPlaylist ]}/>
      </div>
      <div className='flex flex-col w-full mr-8' >
        <FeedHeader heading='Most Recent Tracks' />
        <MediaFeed albums={[ mockAlbum, mockAlbum, mockAlbum, mockAlbum, mockAlbum, mockAlbum, mockAlbum ]} />
      </div>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
