// someReducer.ts

// Определение начального состояния
const initialState = {
    // Ваше начальное состояние
  };
  
  // Определение редуктора
  const someReducer = (state = initialState, action: any) => {
    // Логика редуктора для обработки действий
    switch (action.type) {
      // Обработка различных типов действий
      default:
        return state;
    }
  };
  
  export default someReducer;
  