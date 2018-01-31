// CONSTANTS
const AUTH_LOGIN = 'AUTH_LOGIN';
const AUTH_LOGOUT = 'AUTH_LOGOUT';

// ACTION CREATORS
export const authLoginAction = (id, token) =>({
    type: AUTH_LOGIN,
    payload: {id, token}
});

export const authLogoutAction = () => ({ type: AUTH_LOGOUT });


// REDUCER
const initialState = {id:'', token:''};

export const authReducer = (state = initialState, action = {})=>{
    const {type, payload} = action;
    switch (type){
        case AUTH_LOGIN:
            return payload || initialState;
        
        case AUTH_LOGOUT:
            return initialState;

        default:
            return state
    }
};
// SELECTORS
export const authSelector = (state) => ({ auth: state.auth })