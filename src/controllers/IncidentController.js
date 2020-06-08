const conection = require('../database/conection');

/*  Dentro de um controller, para se seguir o padra mvc,
nao se deve ter mais de 5 metodos.
1 pra lsitagem,
1 pra retornar 1 item,
1 pra alterara,
1 pra add,
1 pra apagar
*/

module.exports = {

    async list(request,response){
        //aqui eu voulimitar o numero de incidetnts por pagina, pra nao
        //ficar muito feio

        //aqui é um parametro que eu recebo pelo link. isso me falar o numero
        //de paginas.Caso nao tenha essa parametro no link, ele é igual a 1.

        const {page=1}=request.query;

        //isso serve pra poder contar o numero total de incidets
        const [count]= await conection("incidents").count()
        //como o metdo retorna um array, eu faço [conunt] é o 
        //mesmo qeu fazer count= array[0];
        
        //vce pode retornar o numero de casos pelo header
        response.header("X-Total-Count", count['count(*)'])
        //eu escrevi cunt desse jeito porque ele é meio que um obeto.
        //no console.log vc vê isso

        const incidents = await conection('incidents')
        .join('ongs','ongs.id','=','incidents.ong_id')
        //eu so quero pegar dados da tabela de ongs cujo 'id' seja 'igual' ao 'ong_id' da tabela incidents  
        .limit(5)//vou receber 5 incidents por pagna
        .offset((page-1)*5)//vou pular 5 incidents por pagina(a pagina 1, pulo 0 e aí vai)
        //pra que nao apareceça todos os dados da ong e do incident, voce pode selcionar
        .select("incidents.*",
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp'
        ,'ongs.city',
        'ongs.uf'
        )



        return response.json(incidents);

    },
    async create(request,response){
        const {title, description ,value } = request.body;
        //essa informação geralmente vem de um contexto 
        //(voce ta logado e resolve criar um caso)
        //ai voce pega a informaçcao do header
        //authorization poderia ser qualquer nome
        const ong_id=request.headers.authorization;


        //a funcao ali me retorna um array com os elementos e o 
        //ID é o primeiro.
        //Logo, ao colocar const [id], eu disse que quero que o primeiro elemento desse arry
        //seja guardado na variavel id.
        //o mesmo que 
        //id=response[0]
        const [id]  = await conection("incidents").insert({
            title,
            description,
            value,
            ong_id
        })

        return response.json({id})
    },
    async delete(request,response){

        const {id}= request.params;

        //praeu verificar se a ong que quer apagar o caso é a dona dele
        const ong_id= request.headers.authorization;


        //quero buscar apenas a ong cujo o ID é igual a variavel id
        const incident =await conection('incidents').where('id',id).select('ong_id').first();
        //na conection, vou pegar a tabela incidents, e procurar alguma cujo id seja iguala  var id, vou pegar
        // apenas o ong_id e como sei que será so um, vou pegar o first.

        //faz uns ifs aqui pra ver se o incident.ond_id === ong_id do request headers e tals 
        // se noader certo, retorna o 401. tem uma lista de codigo de erros
        // procura http status code no google
        console.log(incident.ong_id)
        console.log(ong_id)
        if (incident.ong_id != ong_id){
            return response.status(401).json({error: ' Operation not permited.'});
        }
        await conection('incidents').where('id', id).delete();
        //retorna uma resposta que nao tem conteudo, mas deu sucesso
        return response.status(204).send();
        //o send() é pra enviar a repsosta sme corpo

        
    }


}