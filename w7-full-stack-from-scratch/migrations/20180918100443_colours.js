
exports.up = function(knex, Promise) {
  return knex.schema.createTable("colours", table => {
    table.increments("id").primary()
    table.string("color")
    table.string("category")
    table.string("type")
    table.string("code")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("colours")
};
