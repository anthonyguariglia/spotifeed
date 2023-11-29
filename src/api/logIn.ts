import React, { Dispatch, useReducer } from 'react'
import axios from 'axios'
import { defaultContext } from '../utils/context'
import { SET_TOKEN, reducer } from '../utils/reducer'
import { Action } from '../types/types'

type LogInData = {
  email: string
  password: string
  state: Record<any, any>
  dispatch: Dispatch<Action>
}

const logIn = ({ email, password, state, dispatch }: LogInData) => {

  const apiUrl: string = process.env.environment === 'development' ? 'http://localhost:4000' : 'https://pure-harbor-08948.herokuapp.com'

  return axios({
    method: 'post',
    url: `${apiUrl}/login`,
    data: new URLSearchParams({
      email: email,
      password: password
    })
  })
  .then(resp => dispatch({ type: SET_TOKEN, payload: resp.data.token }))
  .catch(err => console.error(err))
}

export default logIn
