import { SET_USER_NAME, SET_USER_JOB, SET_USER_ADDR, CREATE_USER, GET_USER_LIST } from '../constants/User'
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
        default:
            return state
    }
}

var __state = [{
    "_id": "56ab2af5bbaac72f4053b639",
    "name": "徐涛",
    "addr": "北京",
    "job": "前端",
    "__v": 0
}, {
    "_id": "56ac221971a3044e47d12835",
    "name": "李翠英",
    "addr": "河北",
    "job": "UI",
    "__v": 0
}];
export function userlist(state=__state, action){
    switch( action.type ){
        case GET_USER_LIST:
            return state;
        default:
        return state;
    }
}

