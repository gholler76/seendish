import * as api from '../api/index.js';

export const getBubbles = () => async (dispatch) => {
  try {
    dispatch({type: START_LOADING});
    const data = await api.fetchBubbles();
    dispatch({type: FETCH_ALL, payload: {data}});

    dispatch({type: END_LOADING});
  } catch (error) {
    console.log(error);
  }
};