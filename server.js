const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const productsRouter = require('./controllers/productController')
const usersRouter = require('./controllers/userController')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

// Routes
server.use('/products', productsRouter)
server.use('/users', usersRouter)

server.get('/', (req, res) => {
  res.json({ api: 'Backend is running' })
})

module.exports = server
