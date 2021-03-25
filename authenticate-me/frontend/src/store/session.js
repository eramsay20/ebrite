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

// Reducer
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
