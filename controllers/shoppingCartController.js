const express = require('express')
const ShoppingCartModel = require('../models/shoppingCartModel')

const router = express.Router()

router.get('/', (req, res) => {
  ShoppingCartModel.getCart()
    .then((cart) => res.status(200).json(cart))
    .catch((err) => res.status(500).json({ err: err.message }))
})

// add
router.post('/:username', (req, res) => {
  const { product } = req.body
  const { username } = req.params
  ShoppingCartModel.addToCart(product)
    .then((item) => res.status(200).json(product))
    .catch((err) => res.status(500).json({ err: err.message }))
})

// editCart
router.router // deleteCart // deleteItem
  .delete('/', (req, res) => {
    ShoppingController.deleteCart()
      .then((cart) =>
        res.status(200).json({ message: 'Shopping Cart Deleted' })
      )
      .catch((err) => res.status(500).json({ err: err.message }))
  })

module.exports = router
