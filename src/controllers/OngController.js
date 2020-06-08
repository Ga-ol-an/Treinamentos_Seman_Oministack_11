const connection = require("../database/conection");

//função pra criar id aleatorio

const crypto = require("crypto");

module.exports = {
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString("HEX");
        //mandar ongs pro banco de dados poe demorar, ai
        //voce faz o async pra que o return só aconteça depois do inset

        //conectio é a variavel qeu conecta o que eu mando pro banco de dados.
        //ongs é o nome do banco de dados que eu to mandando
        await connection("ongs").insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });
        return response.json({ id });
    },
    async list(request, response) {
        const ongs = await connection("ongs").select("*");

        return response.json(ongs);
    },
};
