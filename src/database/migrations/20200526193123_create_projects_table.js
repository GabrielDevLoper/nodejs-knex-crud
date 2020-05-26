
exports.up = knex => 
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
});


exports.down = knex => knex.schema.dropTable('projects');
