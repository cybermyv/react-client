import { combineReducers } from 'redux'

import { routerReducer } from 'react-router-redux'
import { authReducer } from '../store/auth'

const createReducer = () =>
  combineReducers({
    auth: authReducer,
  })

export default createReducer
