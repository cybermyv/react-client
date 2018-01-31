//const
const USER_SET = 'USER_SET';

// action

export const userSetAction = (id, login) =>({
    type: USER_SET,
    payload: {id, login}
})

// reducer
const initialState = {id:'', login:''};

export const userReducer = (state= initialState, action=[])=>{
    const {type, payload} = action;

    switch (type){
        case USER_SET:
            return payload || initialState;
        
            default:
                return state;
    }
};

// selectors - что это???

export const userSelector = (state) => ({ user: state.user});