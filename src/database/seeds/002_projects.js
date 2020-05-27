
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          user_id: 1,
          title: "Projeto da Oficina"
        },
        {
          user_id: 1,
          title: "SPA ReactJS"
        },
        {
          user_id: 1,
          title: "API NodeJS-Crud"
        },
        {
          user_id: 2,
          title: "Projeto Redução de Mama"
        },
        {
          user_id: 3,
          title: "Controle de Acesso, Catraca e Relogio de Ponto"
        },
        {
          user_id: 3,
          title: "Reformar a Casa"
        },
        {
          user_id: 4,
          title: "Começar a Faculdade"
        },
        {
          user_id: 5,
          title: "Lajear a Casa e ajeitar a cozinha"
        },
        {
          user_id: 1,
          title: "Comprar uma WebCam e começar a streamar"
        },

      ]);
    });
};
