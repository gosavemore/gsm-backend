const express = require('express')
const ProductModel = require('../models/productsModel')

const router = express.Router()

router.get('/', (req, res) => {
  ProductModel.find()
    .then((rev) => res.status(200).json(rev))
    .catch((err) => res.status(500).json({ err: err.message }))
})

router.get('/:productName', (req, res) => {
  const productName = req.params
  ProductModel.findByName(productName)
    .then((name) => {
      res.status(200).json(name)
      console.log(name)
    })
    .catch((err) => res.status(500).json({ err: err.message }))
})

router.post('/addProduct', (req, res) => {
  const newProduct = req.body
  ProductModel.addProduct(newProduct)
    .then((product) => res.status(200).json(product))
    .catch((err) => res.status(500).json({ err: err.message }))
})

router.put('/:productName', async (req, res) => {
  const { productName } = req.params

  try {
    let searchResult = await ProductModel.findByName({ productName })

    if (!searchResult) {
      res.status(404).json({ message: 'That user does not exist.' })
    } else {
      const changes = req.body
      const updated = await ProductModel.editProduct(searchResult, changes)

      res.status(200).json({ updated })
    }
  } catch (err) {
    res.status(400).json(err)
  }
})

router.delete('/:productName', (req, res) => {
  const { productName } = req.params
  ProductModel.deleteProduct({ productName })
    .then((del) => res.status(200).json({ msg: 'Product deleted' }))
    .catch((err) => res.status(500).json({ err: err.message }))
})

module.exports = router
