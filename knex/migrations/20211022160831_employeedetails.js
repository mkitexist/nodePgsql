
exports.up = function(knex,Promise) {
  return knex.schema.createTable('femaleEmploye',(table)=>{
      table.increments();
      table.text("weight");
      table.text("color");
      table.float("rating");
      table.text("husband");
  })
};

exports.down = function(knex,Promise) {
  return knex.schema.dropTable("femaleEmploye");
};
