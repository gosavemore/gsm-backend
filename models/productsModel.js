const db = require('../data/db-config')

module.exports = {
  find,
  addProduct,
  deleteProduct,
  editProduct,
}

function find() {
  return db('products')
}

function addProduct(newProduct) {
  return db('products').insert(newProduct)
}

function editProduct() {
  return db('products') // TBC
}

function deleteProduct(id) {
  return db('products').delete(id) // where id=id
}
