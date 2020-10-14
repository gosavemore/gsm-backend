const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const productsRouter = require('./controllers/productController')
const usersRouter = require('./controllers/userController')
const shoppingCartRouter = require('./controllers/shoppingCartController')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

// Routes
server.use('/products', productsRouter)
server.use('/users', usersRouter)
server.use('/shoppingCart', shoppingCartRouter)

server.get('/', (req, res) => {
  res.json({ api: 'Backend is running' })
})

module.exports = server
