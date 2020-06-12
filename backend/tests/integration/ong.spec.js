const request = require('supertest')

const app=require('../../src/app')

const connection = require('../../src/database/conection')

describe ('ONG',()=>{
//isso vai acontecer antes de fazer o teste
    beforeEach(async ()=>{
    //voce com isso, voce vai apagar o banco de dados antes de começar o teste
       await connection.migrate.rollback()
       await connection.migrate.latest()
    })

    //afterEach e afterAll acontece depois dos testes
    afterAll(async ()=>{
        await connection.destroy();
    })

    it('should be able to create a new ONG', async ()=>{
        const response = await request(app)
        .post('/cad_ongs')
        .send({
        //pra testar o header, usa o set("authorization")
            name:"gabreiel",
            email:"mutchascoaiss@email.com",
            whatsapp:"4700000000",
            city:"ournises",
            uf:"GO"
            
        })
    //console.log(response.body) agora qeu eu ja vi que recebo meu id, vou testar ele
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
    })
})