import { combineReducers } from 'redux';

// import alertReducer from './alertReducer';


const rootReducer = combineReducers({
  auth: (state = {}, action) => {return state}
  // alert: alertReducer,
});

export default rootReducer;
