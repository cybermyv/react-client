import { combineReducers } from 'redux'

import { routerReducer } from 'react-router-redux'
import { authReducer } from '../store/auth'
import { userReducer } from '../store/user'
import { recsReducer } from '../store/records'

const createReducer = () =>
  combineReducers({
    auth: authReducer,
    user: userReducer,
    recs: recsReducer
  })

export default createReducer
