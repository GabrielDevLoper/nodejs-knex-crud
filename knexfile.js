// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: "node-knex-crud",
      user: "postgres",
      password: "1836"
    },
    //Definindo o local onde irá ficar as migrations criadas
    migrations: {
      tableName: "knex_migrations",
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  },
};
