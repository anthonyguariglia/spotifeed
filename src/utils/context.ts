import React, { ContextType, createContext } from "react"
import { Action } from "../types/types"

export const defaultContext = {
  token: '',
  albums: [],
  playlists: []
}

type ContextProps = {
  readonly state: Record<any, any>
  readonly dispatch: React.Dispatch<Action>
}

const state = {}
const dispatch = () => {}

const contextProps: ContextProps = { state, dispatch }

export const UserContext = createContext(contextProps)

