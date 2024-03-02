// reducers.ts
import { combineReducers } from 'redux';
import rootReducer from './rootReducer'; // Импортируйте корневой редьюсер

const reducers = combineReducers({
  rootReducer,
  // Другие редьюсеры...
});

export default reducers;

