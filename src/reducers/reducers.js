import {
  CHANGE_INPUT_VALUE,
  SEND_MESSAGE,
} from '../actions/actions';

const initialState = {
  inputMessage: '',
  message: '',
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

    default:
      return state;
  }
};

export default inputReducer;
