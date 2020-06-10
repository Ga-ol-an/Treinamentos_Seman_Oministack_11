import axios from 'axios';

const api = axios.create({
  //voce tem que pegar o ip da maquina.
  //o restante é igual na web
  baseURL: 'http://192.168.0.103:3333'
});

export default api;