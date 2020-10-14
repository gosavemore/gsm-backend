const db = require('../data/db-config')

module.exports {
  addToCart,
  editCart,
  getCart,
  deleteItem,
  deleteCart,
}

// TBC
function addToCart(productName){
  return db('shoppingCart').insert(productName)
}

// TBC
function editCart() {
  return 0
}

function getCart() {
  return db('shoppingCart')
}

function deleteItem(productName){
  return db('shoppingCart').where({ productName }).del().first()
}

// TBC
function deleteCart(){
  return db('shoppingCart').del()
}
