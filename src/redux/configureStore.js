import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import greetingReducer from './greeting/greetings';

const store = configureStore({
  reducer: {
    greetingReducer,
  },
}, applyMiddleware(thunk));

export default store;
