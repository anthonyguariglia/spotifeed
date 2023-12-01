import React, { Dispatch, useReducer } from 'react'
import axios from 'axios'
import { defaultContext } from '../utils/context'
import { SET_TOKEN, reducer } from '../utils/reducer'
import { Action } from '../types/types'
import getAlbumData from './getAlbumData'

type LogInData = {
  email: string
  password: string
  state: Record<any, any>
  dispatch: Dispatch<Action>
}

const apiUrl: string = process.env.environment === 'development' ? 'http://localhost:4000' : 'https://pure-harbor-08948.herokuapp.com'


export const logIn = ({ email, password, state, dispatch }: LogInData) => axios({
    method: 'post',
    url: `${apiUrl}/login`,
    data: new URLSearchParams({
      email: email,
      password: password
    })
  })
  .then(resp => {
    dispatch({ type: SET_TOKEN, payload: resp.data.token })
    return loginSpotify()
  })
  .catch(err => console.error(err))

const loginSpotify = () => axios({
    method: 'GET',
    url: `${apiUrl}/loginSpotify`,
    responseType: 'json'
  })
  .then(resp => {
    console.log(resp.data.redirectUrl)
    return resp.data.redirectUrl
  })
  .catch(err => console.error(err))
