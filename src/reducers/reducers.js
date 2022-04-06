import {
  CHANGE_INPUT_VALUE,
  TOGGLE_SIDEBAR,
  SEND_MESSAGE,
} from '../actions/actions';

const initialState = {
  inputMessage: '',
  message: '',
  sidebar: false,
};

const inputReducer = (state = initialState, action = {}) => {
  // console.log(`le reducer a reçu une action ${action.type}`);

  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputMessage: action.value,
      };
    case SEND_MESSAGE:
      return {
        ...state,
        message: action.value,
      };
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebar: action.value,
      };

    default:
      return state;
  }
};

export default inputReducer;
