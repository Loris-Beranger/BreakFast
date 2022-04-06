// === action types
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

export const changeInputValue = (newValue) => ({
  type: CHANGE_INPUT_VALUE,
  value: newValue,
});

export const sendMessage = (newValue) => ({
  type: SEND_MESSAGE,
  value: newValue,
});

export const toggleSidebar = (newValue) => ({
  type: TOGGLE_SIDEBAR,
  value: newValue,
});

