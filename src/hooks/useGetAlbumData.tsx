import React, { useCallback, useContext, useMemo, useEffect, useReducer } from 'react'
import { UserContext, defaultContext } from '../utils/context'
import getAlbumData from '../api/getAlbumData'
import { ADD_ALBUMS, reducer } from '../utils/reducer'

export const useGetAlbumData = async () => {
  const [ state, dispatch ] = useReducer(reducer, defaultContext)

  const albumData = await getAlbumData()

  return useMemo(() => {
    console.log('hook: ', albumData)
    dispatch({ type: ADD_ALBUMS, payload: albumData })
    return albumData
  }, [ albumData ])
}
