import {
  CHANGE_INPUT_VALUE,
  TOGGLE_SIDEBAR,
  SET_ADRESS,
  SET_TOTAL_BASKET,
} from '../actions/actions';

const initialState = {
  inputAdress: '',
  currentAdress: '',
  sidebar: false,
  totalBasket: 0,
};

const inputReducer = (state = initialState, action = {}) => {
  // console.log(`le reducer a reçu une action ${action.type}`);

  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputAdress: action.value,
      };
    case SET_ADRESS:
      return {
        ...state,
        currentAdress: action.value,
      };
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebar: action.value,
      };
    case SET_TOTAL_BASKET:
      return {
        ...state,
        totalBasket: state.totalBasket += action.value,
      };

    default:
      return state;
  }
};

export default inputReducer;
