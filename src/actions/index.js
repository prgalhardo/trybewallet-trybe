// Coloque aqui suas actions
// Aqui serão criadas as actions e as actions types

import getAPI from '../API';

export const PERSONAL_VALUE_INFOS = 'PERSONAL_VALUE_INFOS';
export const TOTAL_WALLET_EXPENSE = 'TOTAL_WALLET_EXPENSE';
export const CURRENT_CURRENCY = 'CURRENT_CURRENCY';
export const ERROR = 'ERROR';

export const personalValueInfos = (payload) => (
  {
    type: PERSONAL_VALUE_INFOS, payload,
  }

);

export const totalWalletExpense = (payload) => (
  {
    type: TOTAL_WALLET_EXPENSE, payload,
  }
);

const getCurrency = (payload) => ({
  type: CURRENT_CURRENCY, payload,
});

const failCurrency = (error) => ({
  type: ERROR, error,
});

export const currentCurrency = (expense) => (dispatch) => getAPI()
  .then((payload) => {
    const spreadObject = { ...expense, exchangeRates: payload };
    dispatch(totalWalletExpense(spreadObject));
  })
  .catch((error) => dispatch(failCurrency(error)));

export const getCurrentCurrency = () => (dispatch) => getAPI()
  .then((coins) => dispatch(getCurrency(Object.keys(coins)
    .filter((coin) => coin !== 'USDT'))));
