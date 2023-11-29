import React, { useReducer } from "react"
import { UserContext, defaultContext } from "../../utils/context"
import { mockPlaylist, mockAlbum } from "../../utils/mocks"
import { Anchor, FeedHeader, NavBar } from "../../components"
import { reducer } from "../../utils/reducer"


const IndexPlaylist = () => {
  const [ state, dispatch ] = useReducer(reducer, defaultContext)

  return (
      <UserContext.Provider value={{ state, dispatch }}>
        <div className='flex flex-row bg-black w-full'>
          <div className='flex flex-col w-1/5' >
            <Anchor />
            <NavBar items={[ mockPlaylist, mockPlaylist, mockPlaylist ]}/>
          </div>
          <div className='flex flex-col w-full mr-8' >
            <FeedHeader heading='Most Recent Tracks' />
          </div>
        </div>
      </UserContext.Provider>
  )
}

export default IndexPlaylist