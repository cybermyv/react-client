import { createStore, applyMiddleware, compose } from 'redux'
import createBrowserHistory from 'history/createBrowserHistory'
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux'
import createReducer from './createReducer'

export const history = createBrowserHistory()

const routerMiddleware = createRouterMiddleware(history)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = () =>
  createStore(
    createReducer(),
    composeEnhancers(applyMiddleware(routerMiddleware))
  )

export default configureStore
