const express = require('express')
const path = require('path')
const server = express()

const colourRoutes = require('./routes/colours');

server.use(express.static(path.join(__dirname, '..', 'public')))
server.use(express.json())

server.use('/colours', colourRoutes)

module.exports = server
