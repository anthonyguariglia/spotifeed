import { Reducer } from "react";
import { Action, ContextType } from "../types/types";

export const SET_TOKEN = 'set-token'
export const ADD_ALBUMS = 'add-albums'
export const ADD_PLAYLISTS = 'add-playlists'

export const reducer: Reducer<ContextType, Action> = (state: ContextType, action: Action) => {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.payload }
    case ADD_PLAYLISTS:
      return { ...state, artist: action.payload }
    case ADD_ALBUMS:
      return { ...state, albums: action.payload }
    default:
      throw new Error()
  }
}

