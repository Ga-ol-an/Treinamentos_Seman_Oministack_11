const connection = require("../database/conection")

module.exports={

    async create (request, response){
        const {id}=request.body;

        const ong= await connection('ongs')
        .where('id', id)
        .select("name")
        .first();

        if(!ong){//caso nao tenha uma ong com esse id
            return response.status(400).json({error: 'No ong found with this ID'})
        }

        return response.json(ong)
    }
}