import { SET_GENDER_FILTER, SET_USER_FILTER,SET_FILTER_DISABLED,SET_FILTER_ENABLED }from '../constants/FilterTypes'
import { SET_USER_DEL }from '../constants/ActionTypes'

export function filterByGender(sex) {
    return {
        type: SET_GENDER_FILTER,
        text: sex
    }
}

export function filterByUser(name) {
    return (dispatch, getState) => {
        dispatch({
            type : SET_FILTER_DISABLED
        });
        setTimeout(() => {
            dispatch({
                type : SET_FILTER_ENABLED
            });
            dispatch({
                type: SET_USER_FILTER,
                text: name
            });
        }, 5000);
    }
}

export function deleteByUser(name) {
    return {
        type: SET_USER_DEL,
        text: name
    }
}