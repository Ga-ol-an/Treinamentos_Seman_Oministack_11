//Esse arquivo vai somente conter as todas,
// pra que nao fique nada bagunçado
const express = require("express");
const routes = express.Router();

/* const connection = require("./database/conection"); */

const OngController= require('./controllers/OngController')
const IncidentController =require("./controllers/IncidentController")
const ProfileController = require("./controllers/ProfileController")
const SessionController = require ("./controllers/SessionController")

//nesse caso, eu quero criar uma seção (login e tal)
routes.post('/sessions',SessionController.create)


routes.post("/cad_ongs", OngController.create)
routes.get('/allongs', OngController.list)

routes.get('/profile',ProfileController.index)

routes.get('/allincidents', IncidentController.list)
routes.post('/incidents', IncidentController.create)
//recebo ali um route param com o id que ue quero deletar
routes.delete('/del_incid/:id',IncidentController.delete)

//eu basicamente crio um objeto routes com todas as rotas da aplicaçao
//depois eu exporto esse objetvio pro index e lá eu faço as coisas
module.exports = routes;
