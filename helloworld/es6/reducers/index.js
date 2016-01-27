import {combineReducers} from 'redux'
import gd from './gender'
import usr from './user'
import usrlst from './userlist'

const todoApp = combineReducers({
    userfilter: usr,
    gender: gd,
    userlist : usrlst
});

export default todoApp