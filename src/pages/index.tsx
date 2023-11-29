import React, { useState, useReducer } from "react"
import type { HeadFC } from "gatsby"
import { mockAlbum, mockImage, mockPlaylist } from "../utils/mocks"
import { defaultContext, UserContext } from "../utils/context"
import { reducer } from "../utils/reducer"
import { Anchor, FeedHeader, Header, MediaFeed, NavBar } from "../components"

const IndexPage = () => {
  const [ state, dispatch ] = useReducer(reducer, defaultContext)

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Header />
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
    </UserContext.Provider>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>SpotiFeed</title>
