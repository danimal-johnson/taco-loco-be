
exports.up = function(knex) {
  return knex.schema
  .createTable('deliveries', tbl => {
    tbl.increments();
    tbl.string('name', 255).notNullable();
    tbl.string('address', 512).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('deliveries')
};
