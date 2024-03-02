// rootReducer.ts
const initialState = {
  counter: 0
};

const rootReducer = (state = initialState, action: { type: any; }) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {
        ...state,
        counter: state.counter + 1
      };
    default:
      return state;
  }
};

export default rootReducer;

