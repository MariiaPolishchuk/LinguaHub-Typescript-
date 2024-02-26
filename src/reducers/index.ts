// reducers/index.ts

import { combineReducers } from 'redux';
import rootReducer from './rootReducer'; // Путь к вашему корневому редьюсеру

const reducers = combineReducers({
  rootReducer, // Используйте адекватное имя для вашего корневого редьюсера
  // Другие редьюсеры...
});

export default reducers;
