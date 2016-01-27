import { SET_USER_FILTER, SET_FILTER_DISABLED, SET_FILTER_ENABLED } from '../constants/FilterTypes'
var initialTimeState = {
    frozen : false,
    username : ''
};
function user(state = initialTimeState, action) {
    switch (action.type) {
        case SET_FILTER_DISABLED:
            return Object.assign({}, state, {
                frozen : true
            });
        case SET_FILTER_ENABLED:
            return Object.assign({}, state, {
                frozen : false
            });
        case SET_USER_FILTER:
            return Object.assign({}, state, {
                username : action.text
            });
        default:
            return state
    }
}

export default user