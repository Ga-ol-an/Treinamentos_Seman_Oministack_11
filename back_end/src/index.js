//vou pegar aqui e criar algumas rotas
const express= require('express');

//o ./ serve pra falar que e um arquivo e nao biblioteca
const routes= require ('./routes');

const cors= require('cors')//eu tive que instalar o cors 
//pra eu poder fazer isso





//eu tenho agora a variável express que tem importado tudo de express

//agora a nossa aplicacao ja foi criada
app.use(cors())//quando tudo já estiver funfando, voce pode fazer um
//origin e colocar o link do seu app
const app = express();
app.use(express.json());//estou dizendo que vu usar json
app.use(routes);//preço pra usar o arquivo rotas que criei


//meu aplicativo agora pode ser acessado no endereço:
//localhost:3333 -  comando -app.listen(3333);
//pra rodar o servidor, digita node index.js

//npm install nodemon -D
//faz rotar automaticamente
//-D é igual dependencia de desenvolviemtno( noa vai entrar no final da aplciacao)
//voce vai la em script, muda o axul pro que voce quiser e no outro coloca nodemon index.js
//isso vai fazer ficar rodando automaticametne


//agora nesse meio lugar aqui, vou escrever o conteudo do meu site, o que eu recebo ao entrar nele

// Princiapis metodos HTTP :
// get, post, put, delete
//get->pega
//post-> cria informaçao (pega pro BD )bancode dados
//put-> muda algo existente
//delete->obvio


//o get é o unico que roda no google
//os outros sao testados no insomnia


//Tipos de parametros no express
//Query Params -> Mais usados com o get
    //Eles são os parametros do link /?nome=gabriel
    //são acessados por request.query. 
    //Usados pra filtros, ordenação, etc

//Route Params-> são usados pro put e delete
    //na chamada da unção poem:
    // 'rota/:id',
    //voce pega isso pelo request.params

//Body-> Post e Put
    // é pra criar o usuario
    //Tem o corpo da função e os caralho.
    //voce precisa pegar tudo
    //request.body 


//app.get('/',(request, response)=>{ tá no arq routes
//sao dois parametros aautomaticos
//ao acessar uma rota, eu faço uma requisição pro meu servidor
//essa requisição pode ter espefcificações (do produto e tal)
//a requisição vem dofront end.

//a response é como isso vai ser respondido pelo backend

//return response.json({message:'Helloooo OmnisStack'});
//vamos retornar o json, ou seja, uma objeto.


//pra acessar o banco de dados, voce precisa primeiro de instalar o knex
//})

//npm instala uma coisa
//npx inicia uma coisa

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%% TUDO QUE FIZ DAQUI PRA CIMA FOI COLOCADO NO ROUTES %%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


app.listen(3333);

