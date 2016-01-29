import {combineReducers} from 'redux'
import gd from './gender'
import usr from './user'
import usrlst from './userlist'

const todoApp = combineReducers({
    user: usr
});

export default todoApp