
exports.up = function(knex) {
  //agora vou usar a estrutura do knexx pra cirar a tabela
  //tudo essas porra do knex tem no site do knex que eu add aos favorieos

  return knex.schema.createTable('ongs',function(table){
        //essas sao os campos da minha tabela
        //primary é pra ser a primeira linha da tabela.

        table.string('id').primary();
        //pra fazer um id que vai aumentando sozinho, faça:
        //table.increments();
        //string é o tipo. Poder ter decimal(float) e outros caralho
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        //o argumento 2 limita o tamanho do campo
        table.string('uf',2).notNullable();
  })
};
//o metodo down é o oposto do up, pois o donw vai ser usado qunado o up der errado.
//nessa caso, o oposto do up é deletar a tabela

//pra rodar aqui, esse é o comando:7
// npx knex migrate:latest

//tem o comando npx knex que te mosta todos os comandos diposnives
//npx knex migrations:rollback

exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};  
