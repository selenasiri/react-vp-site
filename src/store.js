import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk'
import index from './reducers/index'

const initialState = {};

const middleware = [thunk];

const store = configureStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
