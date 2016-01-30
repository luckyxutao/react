import { SET_USER_NAME, SET_USER_JOB, SET_USER_ADDR, CREATE_USER,GET_USER_LIST }from '../../constants/User'
require('isomorphic-fetch');
export function setUserName(name) {
    return {
        type: SET_USER_NAME,
        text: name
    }
}

export function setUserJob(job) {
    return {
        type: SET_USER_JOB,
        text: job
    }
}

export function setUserAddr(addr) {
    return {
        type: SET_USER_ADDR,
        text: addr
    }
}

export function getUsers(addr) {
    return {
        type: GET_USER_LIST
    }
}

export function createUser(usermodel) {
    return (dispatch, getState) => {
        fetch('/users', {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(usermodel)
        }).then(function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function(stories) {
                console.log(stories)
            });
        }
}