const knex = require('knex')
const config = require('../../knexfile').development
const db = knex(config)

function getColours() {
  return db('colours').then(colours => {
    return colours.map(colour => {
      colour.code = JSON.parse(colour.code)
      return colour
    })
  })
}

module.exports = {
  getColours
}
