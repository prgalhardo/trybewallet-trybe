// Esse reducer será responsável por tratar todas as informações relacionadas as despesas.

import { TOTAL_WALLET_EXPENSE, CURRENT_CURRENCY } from '../actions';

const INITIAL_STATE = {
  currencies: ['USD',
    'CAD',
    'EUR',
    'GBP',
    'ARS',
    'BTC',
    'LTC',
    'JPY',
    'CHF',
    'AUD',
    'CNY',
    'ILS',
    'ETH',
    'XRP'],
  expenses: [],

};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case TOTAL_WALLET_EXPENSE:
    return {
      ...state,
      expenses: [action.payload],
    };
  case CURRENT_CURRENCY:
    return {
      ...state,
      currencies: [action.payload],
    };
  default:
    return state;
  }
};

export default wallet;
