import { Reducer } from "react";
import { Action, ContextType } from "../types/types";

export const SET_TOKEN = 'set-token'
export const ADD_ALBUM = 'add-album'
export const ADD_PLAYLIST = 'add-playlist'

export const reducer: Reducer<ContextType, Action> = (state: ContextType, action: Action) => {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.payload }
    case ADD_PLAYLIST:
      return { ...state, artist: action.payload }
    case ADD_ALBUM:
      return { ...state, albums: action.payload }
    default:
      throw new Error()
  }
}

