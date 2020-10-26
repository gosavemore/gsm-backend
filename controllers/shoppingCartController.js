const express = require('express')
const ShoppingCartModel = require('../models/shoppingCartModel')

const router = express.Router()

router.get('/', (req, res) => {
  ShoppingCartModel.getCart()
  console.log('req ===>', req)
  console
    .log('res ===>', res)
    .then((cart) => res.status(200).json(cart))
    .catch((err) => res.status(500).json({ err: err.message }))
})

// add
router.post('/:username', (req, res) => {
  const { product } = req.body
  console.log('product ======>', product)
  const { username } = req.params
  console.log('username ======>', username)
  ShoppingCartModel.addToCart(product)
    .then((item) => res.status(200).json(product))
    .catch((err) => res.status(500).json({ err: err.message }))
})

// editCart
router // deleteCart // deleteItem
  .delete('/', (req, res) => {
    ShoppingController.deleteCart()
      .then((cart) =>
        res.status(200).json({ message: 'Shopping Cart Deleted' })
      )
      .catch((err) => res.status(500).json({ err: err.message }))
  })

module.exports = router
