exports.up = knex => knex.schema.createTable('package', table => {
    table.increments('id').primary()
    table.string('package')
    table.string('username')
   
  })
  
  exports.down = knex => knex.schema.dropTable('package')
  