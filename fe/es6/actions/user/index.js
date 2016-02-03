import { SET_USER_NAME, SET_USER_JOB, SET_USER_ADDR, CREATE_USER,GET_USER_LIST, SET_USER_LIST, CLEAR_USER, UPDATE_USER }from '../../constants/User'
require('isomorphic-fetch');
import history from '../../history'
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
export function setUserByModel(usermodel){
    return {
        type : UPDATE_USER,
        user : usermodel
    }
}
export function clearUser(){
    return {
        type : CLEAR_USER
    }
}

export function setUserList(users){
    return {
        type : SET_USER_LIST,
        users : users
    }
}
export function getUsers() {
    return (dispatch, getState) => {
        fetch('/users', {
          method: 'get',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function(stories) {
                var maped = stories.map(function(re,idx){
                    re.uid =re._id;
                    return re;
                });
                dispatch(setUserList(stories));
            });
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
                dispatch(clearUser());
                return history.push('/member');
            });
        }
}

export function updateUser(usermodel) {
    return (dispatch, getState) => {
        fetch('/users/'+ usermodel.uid, {
          method: 'put',
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
                dispatch(clearUser());
                return history.push('/member');
            });
        }
}
export function getUserById( uid ) {
    return (dispatch, getState) => {
        fetch('/users/' + uid, {
          method: 'get',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function(story) {
                story.uid = story._id;
                dispatch(setUserByModel(story));
            });
        }
}