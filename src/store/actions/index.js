// Coloque aqui suas actions
// Aqui serão criadas as actions e as actions types

export const PERSONAL_VALUE_INFOS = 'PERSONAL_VALUE_INFOS';

export const personalValueInfos = (payload) => (
  {
    type: PERSONAL_VALUE_INFOS, payload,
  }
);
