import { push } from 'react-router-redux'

// CONSTANTS
const AUTH_LOGIN = 'AUTH_LOGIN'
const AUTH_LOGOUT = 'AUTH_LOGOUT'

// ACTION CREATORS
export const authLoginAction = (id, token) => ({
    type: AUTH_LOGIN,
    payload: { id, token },
  })
  export const authLogoutAction = () => ({ type: AUTH_LOGOUT })
  
// ASYNC ACTIONS
export const asyncActionAuthLogin = (username, password) => async (dispatch, getState, api) => {
    try {
      const { id, token, title } = await api.userAuth(username, password)
      dispatch(authLoginAction(id, token))
     // dispatch(userSetAction(id, title))
      //dispatch(push('/todos'))
    } catch (e) {
      //dispatch(asyncActionErrorShow('Неверное имя пользователя или пароль', e))
      console.log('Неверное имя пользователя или пароль', e);
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
  export const authSelector = (state) => ({ auth: state.auth })
  