import {combineReducers} from 'redux'
import gd from './gender'
import {user, userlist} from './user'

const todoApp = combineReducers({
    user: user,
    userlist : userlist
});

export default todoApp