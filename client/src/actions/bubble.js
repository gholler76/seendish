import * as api from '../api/index.js';
import {START_LOADING, END_LOADING, FETCH_ALL_BUBBLES, CREATE_BUBBLE} from '../constants/actionTypes';

export const getBubbles = () => async (dispatch) => {
  try {
    dispatch({type: START_LOADING});
    const data = await api.fetchBubbles();
    dispatch({type: FETCH_ALL_BUBBLES, payload: data});
    dispatch({type: END_LOADING});

  } catch (error) {
    console.log(error);
  }
};

export const createBubble = (bubble) => async (dispatch) => {
  try {
    dispatch({type: START_LOADING});
    const {data} = await api.createBubble(bubble);
    dispatch({type: CREATE_BUBBLE, payload: data});

  } catch (error) {
    console.log(error);
  }
};