// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      //aqui eu coloco onde vou salvar o arquivo do meu banco de dados
      filename: './src/database/db.sqlite'
    },
    migrations:{
      directory: './src/database/migrations'
    },
    useNullAsDefault:true,
  },
  test: {
    client: 'sqlite3',
    connection: {
      //aqui eu coloco onde vou salvar o arquivo do meu banco de dados
      filename: './src/database/teste.sqlite'
    },
    migrations:{
      directory: './src/database/migrations'
    },
    useNullAsDefault:true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
