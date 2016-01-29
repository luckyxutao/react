import { SET_USER_DEL } from '../constants/ActionTypes'

const __usrlist = [{
    name: '徐涛',
    age: 15,
    gender: 0
}, {
    name: '李小英',
    age: 25,
    gender: 1
}, {
    name: '王五',
    age: 82,
    gender: 0
}, {
    name: '徐初九',
    age: 82,
    gender: 0
}];
function userlist(state = __usrlist, action) {
    switch(action.type){
        case SET_USER_DEL:
            return state.filter(function(v,i){
                return v.name !== action.text;
            });
        default:
            return state;
    }
    return state;
}

export default userlist