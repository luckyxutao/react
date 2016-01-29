import { SET_GENDER_FILTER } from '../constants/FilterTypes'
function gender(state = '-1', action) {
    switch (action.type) {
        case SET_GENDER_FILTER:
            return action.text
        default:
            return state
    }
}
export default gender