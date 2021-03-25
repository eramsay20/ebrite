// actions, thunks, reducers for session users info
import { csrfFetch } from '../store/csrf';

const SET_USER = 'authenticate/SET_USER';
const REMOVE_USER = 'authenticate/REMOVE_USER';

// Action Creators
const setSessionUser = (user) => ({
  type: SET_USER,
  payload: user,
})

const removeSessionUser = () => ({
  type: REMOVE_USER,
})

// Thunks
export const login = (loginInfo) => async dispatch => {
  const { credential, password } = loginInfo;
  const response = await csrfFetch(`/api/session`, {
    method: 'POST',
    body: JSON.stringify({
      credential,
      password,
    }),
  })

  if(response.ok){
    const user = await response.json();
    dispatch(setSessionUser(user));
    return user;
  }
}

// Restore user
export const restoreUser = () => async dispatch => {
  const response = await csrfFetch(`/api/session`)
  if(response.ok){
    const data = await response.json();
    dispatch(setSessionUser(data.user))
    return data.user
  }
}

export const signup = (signupInfo) => async dispatch => {
  const { username, email, password } = signupInfo;
  const response = await csrfFetch(`/api/users`, {
      method: 'POST',
      body: JSON.stringify({
        username,
        email,
        password
      })
  })

  if(response.ok){
    const data = await response.json()
    dispatch(setSessionUser(data.user))
    return data.user;
  }
}




// Reducers
const initialState = { user: null }

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch(action.type){
    case SET_USER:
      newState = {
        ...state,
        user: action.payload
      }
      return newState;
    case REMOVE_USER:
      newState = {
        ...state,
        user: null,
      }
      return newState;
    default:
      return state;
  }
}

export default sessionReducer;


// Session slice of state:
// {
//   user: {
//     id,
//     email,
//     username,
//     createdAt,
//     updatedAt
//   }
// }
