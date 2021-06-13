import {FETCH_ALL_BUBBLES, FETCH_BY_SEARCH, FETCH_BUBBLE, CREATE, UPDATE, DELETE, LIKE} from '../constants/actionTypes';

export default (state = {isLoading: true, posts: []}, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return {...state, isLoading: true};
    case 'END_LOADING':
      return {...state, isLoading: false};
    case FETCH_ALL_BUBBLES:
      return {
        ...state,
        bubbles: action.payload.data,
      };
    case FETCH_BY_SEARCH:
      return {...state, posts: action.payload.data};
    case FETCH_BUBBLE:
      return {...state, post: action.payload.post};
    case CREATE:
      return {...state, posts: [...state.posts, action.payload]};
    default:
      return state;
  }
};