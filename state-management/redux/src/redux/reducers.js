export const numberOfClicksReducer = (state = 0, action) => {
  switch(action.type) {
    case 'COUNTER_BTN_CLICKED':
      return state + action.payload.amount;
    case 'INCREMENT_NUMBER_CLICKED':
      return state + action.payload.amount;
    default:
      return state;
  }
};
