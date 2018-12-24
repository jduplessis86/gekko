import {
    PROFILE_GET, PROFILE_GET_SUCCESS, PROFILE_GET_FAILURE
  } from '../actions/actionsProfiles'
  
  // The auth reducer. The starting state sets authentication
  // based on a token being in local storage. In a real app,
  // we would also want a util to check if the token is expired.
  export function profile(state = {
      isFetching: false,
      isAuthenticated: localStorage.getItem('id_token') ? true : false
    }, action) {
    switch (action.type) {
      case PROFILE_GET:
        return Object.assign({}, state, {
          isFetching: true,
          isAuthenticated: false,
          user: action.creds
        })
      case PROFILE_GET_SUCCESS:
        return Object.assign({}, state, {
          isFetching: false,
          isAuthenticated: true,
          errorMessage: ''
        })
      case PROFILE_GET_FAILURE:
        return Object.assign({}, state, {
          isFetching: false,
          isAuthenticated: false,
          errorMessage: action.message
        })
      default:
        return state
    }
  }