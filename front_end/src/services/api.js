/* Agora eu vou conectar o front end com o backend 

Pra isso eu preciso de um Cliente HTTP, o que chama a backend e obtem as repsonsta

Eu faço isso usando o axios, pra isso, dê 'npm install axios' no terminal

*/

import axios from 'axios'

const api= axios.create({
    /* Vou adicionar aqui aquela parte que é padrão e que nunca muda com os sites */
    baseURL:'http://localhost:3333',
})

export default api;