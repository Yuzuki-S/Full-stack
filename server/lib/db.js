const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const knex = require('knex')(config)




function savePackage (purchase, user, testDb) {
    const connection = testDb || knex
    console.log(purchase.thing);
    
    return connection('package')
      .insert({package:purchase.thing,
                username: user
    })
      .then(data => {
          console.log(data);
          
          return connection('package')
          .select()
          .where({'id': data[0]})
      })
  }
  


  module.exports = {
    savePackage
  } 