const urlAPI = 'https://economia.awesomeapi.com.br/json/all';

const getAPI = () => fetch(urlAPI)
  .then((response) => response.json())
  .then((data) => (data))
  .catch((error) => (error));

export default getAPI;
