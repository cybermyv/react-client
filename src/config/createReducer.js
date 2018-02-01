import { combineReducers } from 'redux'

import { routerReducer } from 'react-router-redux'
import { authReducer } from '../store/auth'
import { userReducer } from '../store/user'

const createReducer = () =>
  combineReducers({
    auth: authReducer,
    user: userReducer
  })

export default createReducer
