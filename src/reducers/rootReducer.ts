import { combineReducers } from 'redux';
import someReducer from './someReducer'; // Импортируем другие редукторы, если есть

const rootReducer = combineReducers({
  someSlice: someReducer,
  // Другие редукторы, если есть
});

export default rootReducer;
