
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'Gabriel Santos de Lima Barreto'},
        { username: 'Ewellin da Paz Silva'},
        { username: 'André Felipe Santos de Lima Barreto'},
        { username: 'Ana Camilla Santos de Lima Barreto'},
        { username: 'Bernadete Santos'},
        { username: 'Fabio de Lima Barreto'},
        { username: 'Osvaldo Junior Albuquerque'},
        { username: 'Marianne Leticia Lima Barreto'},
        { username: 'Maria Cicera Santos'},
        { username: 'Janete Santos'},
        { username: 'Luiza Santos'},
        { username: 'Lucia Santos'},
        { username: 'Joaquin Santos Filho'},
        { username: 'Luzinete da Silva'},
        { username: 'João Andrade de Mello'},
        { username: 'Camila Mello da Paz'},
        { username: 'Roberto Cristian Silva'},
        { username: 'Jackson dos Santos Moura'},
        { username: 'Bruno Gomes da Silva'},
        { username: 'Samara Nayara da Paz'},
        { username: 'Anne Karolyne Felix'},
        { username: 'Aline Felix da Paz'},
        { username: 'Jhefferson Moura'},
        { username: 'Erika da Paz'},
        { username: 'Julio Pereira'},
        { username: 'Cely Barreto'},
        { username: 'Cristiano Ronaldo'},
        { username: 'Neymar Junior'},
      ]);
    });
};
