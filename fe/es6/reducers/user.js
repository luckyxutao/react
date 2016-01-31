import { SET_USER_NAME, SET_USER_JOB, SET_USER_ADDR, CREATE_USER, GET_USER_LIST, SET_USER_LIST, CLEAR_USER } from '../constants/User'
var initialUser = {
    name : '',
    addr : '',
    job : ''
};
export function user(state = initialUser, action) {
    switch (action.type) {
        case SET_USER_NAME:
            return Object.assign({}, state,{ name : action.text});
        case SET_USER_JOB:
            return Object.assign({}, state,{ job : action.text});
        case SET_USER_ADDR:
            return Object.assign({}, state,{ addr : action.text});
        case CREATE_USER:
            return Object.assign({}, state);
        case CLEAR_USER:
            return Object.assign({}, initialUser);
        default:
            return state
    }
}

var __statelist = {
    list : []
}
export function userlist(state=__statelist, action){
    switch( action.type ){
        case GET_USER_LIST:
            return state;
        case SET_USER_LIST:
            return Object.assign({}, state,{list : action.users});
        default:
        return state;
    }
}

