const router = require('express').Router()
const CartModel = require('../models/cartModel')

router.get('/', (req, res) => {
  CartModel.find()
    .then((orders) => {
      res.status(200).json(orders)
    })
    .catch((err) => res.status(500).json({ err: err.message }))
})

router.get('/:id', (req, res) => {
  let userId = req.params.id
  CartModel.findByCartId(userId)
    .then((orders) => {
      res.status(200).json(orders)
    })
    .catch((err) => res.status(400).json({ message: err.message }))
})

router.post('/:id', (req, res) => {
  const order = req.body
  CartModel.addCart(order)
    .then((order) => {
      res.status(200).json({ message: `Order is added ${order}` })
    })
    .catch((err) => res.status(400).json({ err: err.message }))
})

router.put('/:id', (req, res) => {
  let { id } = req.params
  let data = req.body
  CartModel.editCart(id, data)
    .then((cart) => res.status(200).json({ cart }))
    .catch((err) => res.status(400).json({ err: err.message }))
})

module.exports = router
