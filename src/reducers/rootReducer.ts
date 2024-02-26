import { combineReducers } from 'redux';
import someReducer from './someReducer';

const rootReducer = combineReducers({
  someReducer,
  // Другие редьюсеры...
});

export default rootReducer;
