import { configureStore } from '@reduxjs/toolkit';
import rootReducerCombined from './reducers';

const store = configureStore({
  reducer: rootReducerCombined,
  // Дополнительные настройки могут быть добавлены здесь
});

export default store;
