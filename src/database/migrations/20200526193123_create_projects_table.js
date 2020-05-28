const { onUpdateTrigger } = require('../../../knexfile');

exports.up = async knex => 
knex.schema.createTable('projects', table => {
table.increments('id')
table.text('title')
    .notNullable()

//Relacionamento com a tabela usuarios
table.integer('user_id')
    .references('users.id')
    .notNullable()
    .onDelete('CASCADE')
    
//Simplificando timestamps
table.timestamps(true, true);
}).then(() => knex.raw(onUpdateTrigger('projects')));


exports.down = async knex => knex.schema.dropTable('projects');
