//Esse arquivo vai somente conter as todas,
// pra que nao fique nada bagunçado
const express = require("express");

const { celebrate, Segments, Joi } = require("celebrate");

const routes = express.Router();

/* const connection = require("./database/conection"); */

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

//nesse caso, eu quero criar uma seção (login e tal)
routes.post("/sessions", SessionController.create);

//deve ser em segundo parametro pois a ordem de execucao é assim ->
//voce pode chamar quantos conceitos quiser. Isso se chama innerword
routes.post(
    "/cad_ongs",

    celebrate({
        [Segments.BODY]: Joi.object().keys({
            //agora descreve as informaçoes que vc ta enviadno
            name: Joi.string().required(), //disse que o nome pe uma string e obrigatorio
            email: Joi.string().required().email(),//verifica se o emial tem arroba e termina com .algo
            //ali deveria ser number, mas bugou
            whatsapp: Joi.string().required().min(10).max(11),//o whatsapp sera mandando pra ser numero, tem no min
            //10 caracteres (sem o 9) e no máximo 11
            city: Joi.string().required(),
            uf: Joi.string().required().length(2)//mandei o tamnaho pra 2
            //se eu validar somente com os dados acima, da um erro 500, algo que noa é bom
        }),
    }),

    OngController.create
);
//dentro de celebrate voce coloca os parametros (query, bodym etc)
//como o que vai dentro de celebrate é um objeto e a chave dele é uma variavel
//logo, voce deve colocar colchetes. [coloque sempre que um objeto tiver uma chave sendo variavel
//javascript, vc deve por conclehte]

routes.get("/allongs", OngController.list);

routes.get("/profile", 
    celebrate({
        //pra pegar os headers vc deve pegar pelo objeto e por unknown depois
        [Segments.HEADERS]: Joi.object({

            authorization:Joi.string().required()
            
        }).unknown()//podem haver propriedades peo ehader que ue nao sei 
        //(assim ele nao valida as que eu nao tenho)
}), ProfileController.index);

routes.get("/allincidents", 
    celebrate({
        [Segments.QUERY]: Joi.object().keys({
            page: Joi.number(),
        })

    })
,IncidentController.list);
routes.post("/incidents", IncidentController.create);
//recebo ali um route param com o id que ue quero deletar
routes.delete("/del_incid/:id", celebrate({
    [Segments.PARAMS]:Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete);

//eu basicamente crio um objeto routes com todas as rotas da aplicaçao
//depois eu exporto esse objetvio pro index e lá eu faço as coisas
module.exports = routes;
