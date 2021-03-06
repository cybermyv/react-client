import { push } from 'react-router-redux'
import { userSetAction } from '../user'
import { get } from 'lodash';

// CONSTANTS
const AUTH_LOGIN = 'AUTH_LOGIN'
const AUTH_LOGOUT = 'AUTH_LOGOUT'

// ACTION CREATORS
export const authLoginAction = (id, token) => ({
  type: AUTH_LOGIN,
  payload: { id, token },
})

export const authLogoutAction = () => ({ type: AUTH_LOGOUT })

// ASYNC ACTION

export const asyncActionAuthLogin = (username, password) => async (dispatch, getState, api, ) => {
  try {
    console.log('asyncActionAuthLogin')

    const { ID, token, login } = await api.userAuth(username, password);
    dispatch(authLoginAction(ID, token))
    dispatch(userSetAction(ID, login))
    dispatch(push('/main'))
  } catch (e) {
    if (get(e, ['status']) === 401) dispatch(push('/signin'))
  }
}

// REDUCER
const initialState = { id: '', token: '' }

export const authReducer = (state = initialState, action = {}) => {
  const { type, payload } = action
  switch (type) {
    case AUTH_LOGIN:
      return payload || initialState

    case AUTH_LOGOUT:
      return initialState

    default:
      return state
  }
}
// SELECTORS
export const authSelector = state => ({ auth: state.auth })
