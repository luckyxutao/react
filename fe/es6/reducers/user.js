import { SET_USER_NAME, SET_USER_JOB, SET_USER_ADDR, CREATE_USER } from '../constants/User'
var initialUser = {
    name : '',
    addr : '',
    job : ''
};
function user(state = initialUser, action) {
    switch (action.type) {
        case SET_USER_NAME:
            return Object.assign({}, state,{ name : action.text});
        case SET_USER_JOB:
            return Object.assign({}, state,{ job : action.text});
        case SET_USER_ADDR:
            return Object.assign({}, state,{ addr : action.text});
        case CREATE_USER:
            return Object.assign({}, state);
        default:
            return state
    }
}

export default user