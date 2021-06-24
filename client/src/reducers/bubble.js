import {START_LOADING, END_LOADING, FETCH_ALL_BUBBLES, FETCH_BY_SEARCH, FETCH_BUBBLE, CREATE_BUBBLE} from '../constants/actionTypes';

export default (state = {isLoading: true, bubbles: []}, action) => {
  switch (action.type) {
    case START_LOADING:
      return {...state, isLoading: true};
    case END_LOADING:
      return {...state, isLoading: false};
    case FETCH_ALL_BUBBLES:
      return {
        ...state,
        bubbles: action.payload.data,
      };
    case FETCH_BY_SEARCH:
      return {...state, bubbles: action.payload.data};
    case FETCH_BUBBLE:
      return {...state, bubble: action.payload.bubble};
    case CREATE_BUBBLE:
      return {...state, bubbles: [...state.bubbles, action.payload]};
    default:
      return state;
  }
};