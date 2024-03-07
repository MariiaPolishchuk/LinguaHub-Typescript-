import { configureStore } from '@reduxjs/toolkit';
import rootReducerCombined from './reducers/rootReducer';

const store = configureStore({
  reducer: rootReducerCombined,
  // Дополнительные настройки могут быть добавлены здесь
});

export default store;
