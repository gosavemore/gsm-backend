exports.up = function (knex) {
  return knex.schema.createTable("shoppingCart", (cart) => {
    cart.increments();
    cart
      .integer("username_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    cart
      .integer("products_id")
      .unsigned()
      .references("id")
      .inTable("products")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    cart.integer("quantity");
    cart.datetime("added");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("shoppingCart");
};
