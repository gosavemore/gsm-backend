const express = require('express')
const router = express.router()
const ShoppingCartModel = require('../models/shoppingCartModel')

router.get('/', (req, res) => {
  ShoppingCartModel.getCart()
    .then((cart) => res.status(200).json(cart))
    .catch((err) => res.status(500).json({ err: err.message }))
})

// add
router.put('/', (req, res) => {
  const { product } = req.body
  ShoppingCartModel.addToCart(product)
    .then((item) => res.status(200).json(product))
    .catch((err) => res.status(500).json({ err: err.message }))
})

// editCart

// deleteItem

// deleteCart
router.delete('/', (req, res) => {
  ShoppingController.deleteCart()
    .then((cart) => res.status(200).json({ message: 'Shopping Cart Deleted' }))
    .catch((err) => res.status(500).json({ err: err.message }))
})
