export const counterButtonClicked = {
  type: 'COUNTER_BTN_CLICKED',
  payload: { amount: 1 },
};

export const incrementNumberClicks = (amount) => ({
  type: 'INCREMENT_NUMBER_CLICKED',
  payload: { amount },
});
