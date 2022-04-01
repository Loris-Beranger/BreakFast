import {
  CHANGE_INPUT_VALUE,
} from '../actions/actions';

const initialState = {
  inputMessage: '',
  
};

const inputReducer = (state = initialState, action = {}) => {
  // console.log(`le reducer a reçu une action ${action.type}`);

  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputMessage: action.value,
      };

    default:
      return state;
  }
};

export default inputReducer;
