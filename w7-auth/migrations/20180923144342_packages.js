exports.up = knex => knex.schema.createTable('package', table => {
    table.increments('id').primary()
    table.string('package')
   
  })
  
  exports.down = knex => knex.schema.dropTable('package')
  