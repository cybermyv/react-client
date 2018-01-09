import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

//import { authReducer } from '../store/auth'


const createReducer = () => 
combineReducers({
    auth : authreducer,
    router : routerReducer, 
});

export default createReducer;