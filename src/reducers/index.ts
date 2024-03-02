import { combineReducers } from 'redux';
import rootReducer from './rootReducer';
import someReducer from './someReducer'; // Импортируем другие редукторы, если есть

const rootReducerCombined = combineReducers({
  root: rootReducer,
  someSlice: someReducer,
  // Другие редукторы, если есть
});

export default rootReducerCombined;


