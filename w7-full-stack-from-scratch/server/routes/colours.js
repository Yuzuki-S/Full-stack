const express = require('express')
const router = express.Router()

const db = require('../db/colours')

router.get('/', (req,res) => {
  db.getColours()
  .then(colours => {
    res.json(colours)
  })
})

module.exports = router
