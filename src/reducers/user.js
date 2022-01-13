// Esse reducer será responsável por tratar as informações da pessoa usuária.

import { PERSONAL_VALUE_INFOS } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PERSONAL_VALUE_INFOS:
    return {
      ...state,
      email: action.payload,
      password: action.payload,
    };
  default:
    return state;
  }
};

export default user;
