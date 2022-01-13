// Coloque aqui suas actions
// Aqui serão criadas as actions e as actions types

export const PERSONAL_VALUE_INFOS = 'PERSONAL_VALUE_INFOS';
export const TOTAL_WALLET_EXPENSE = 'TOTAL_WALLET_EXPENSE';
export const CURRENT_CURRENCY = 'CURRENT_CURRENCY';

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

export const currentCurrency = (payload) => (
  {
    type: CURRENT_CURRENCY, payload,
  }
);
