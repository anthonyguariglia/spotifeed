import React, { Dispatch, ReactNode, useReducer } from 'react'
import axios from 'axios'
import { defaultContext } from '../utils/context'
import { SET_TOKEN, reducer } from '../utils/reducer'
import { Action } from '../types/types'
import getAlbumData from './getAlbumData'
import { FieldErrors, FieldError } from 'react-hook-form'

type LogInData = {
  email: string
  password: string
  setLogInErrors: (msg: string) => void
  state: Record<any, any>
  dispatch: Dispatch<Action>
}

type LogInInfo = {
  redirectUrl: string,
  token: string
}

const apiUrl: string = process.env.environment === 'development' ? 'http://localhost:4000' : 'https://pure-harbor-08948.herokuapp.com'


export const logIn = ({ email, password, setLogInErrors, state, dispatch }: LogInData): Promise<LogInInfo> => axios({
    method: 'post',
    url: `${apiUrl}/login`,
    data: new URLSearchParams({
      email: email,
      password: password
    })
  })
  .then(resp => {
    setLogInErrors('')
    const retObj = loginSpotify().then(requestUrl => {
      return {
        redirectUrl: requestUrl,
        token: resp.data.token
      }
    })
    return retObj
  })
  .catch(err => {
    setLogInErrors('Invalid Username or Password')
    return {
      redirectUrl: '',
      token: ''
    }
    // throw new Error('Invalid Username or Password')
  })

const loginSpotify = () => axios({
    method: 'GET',
    url: `${apiUrl}/loginSpotify`,
    responseType: 'json'
  })
  .then(resp => resp.data.redirectUrl)
  .catch(err => console.error(err))
