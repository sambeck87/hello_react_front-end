export const SUCCESS_FETCH = 'hello-react-front-end/greetings/SUCCESS_FETCH';
export const FAIL_FETCH = 'hello-react-front-end/greetings/FAIL_FETCH';
const URL = 'http://127.0.0.1:3000/api/v1/greetings';

export const getData = () => async (dispatch) => {
  try {
    const resp = await fetch(URL);
    const data = await resp.json();
    dispatch({
      type: SUCCESS_FETCH,
      payload: data.message,
    });
  } catch (err) {
    dispatch({
      type: FAIL_FETCH,
    });
  }
};

const greetingReducer = (state = [], action) => {
  switch (action.type) {
    case SUCCESS_FETCH: return action.payload;
    case FAIL_FETCH:
      return { ...state, loading: false, error: action.payload };
    default: return state;
  }
};

export default greetingReducer;
