// === action types
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const SET_ADRESS = 'SET_ADRESS';
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const SET_BAKERY_LIST = 'SET_BAKERY_LIST';

export const changeInputValue = (newValue) => ({
  type: CHANGE_INPUT_VALUE,
  value: newValue,
});

export const setAdress = (newValue) => ({
  type: SET_ADRESS,
  value: newValue,
});

export const toggleSidebar = (newValue) => ({
  type: TOGGLE_SIDEBAR,
  value: newValue,
});

export const setBakeryList = (newValue) => ({
  type: SET_BAKERY_LIST,
  value: newValue,
});

