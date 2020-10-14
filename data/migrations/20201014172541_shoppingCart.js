exports.up = function (knex) {
  return knex.schema.createTable('shoppingCart', (cart) => {
    cart.increments()
    cart.string('username', 256).notNullable().unique()
    cart.string('productName', 256).notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('shoppingCart')
}
