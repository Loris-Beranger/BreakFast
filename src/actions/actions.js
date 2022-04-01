// === action types
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const SEND_MESSAGE = 'SEND_MESSAGE';

export const changeInputValue = (newValue) => ({
  type: CHANGE_INPUT_VALUE,
  value: newValue,
});

export const sendMessage = (newValue) => ({
  type: SEND_MESSAGE,
  value: newValue,
});

