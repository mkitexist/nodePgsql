
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.raw('TRUNCATE TABLE "femaleEmploye" CASCADE')
  return knex('femaleEmploye').del()
    .then(function () {
      // Inserts seed entries
      return knex('femaleEmploye').insert([
        {id: 1, weight: '48',
        color:"fair",rating:4.7,husband:"dinga" },
       
        {id: 2, weight: '45',
        color:"dark",rating:5,husband:"singa" },
       
        {id: 3, weight: '60',
        color:"tan",rating:4.8,husband:"minga" },
       
      ]);
    });
};
