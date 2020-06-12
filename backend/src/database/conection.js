const knex= require('knex');

const configuration = require ('../../knexfile')

const config = process.env.NODE_ENV ==='test'?configuration.test : configuration.development;
 //variaeis ambientes node rocket seat
 
//pra eu saber meu ambiente de desenvolvimetno

const connection = knex(config)

module.exports = connection