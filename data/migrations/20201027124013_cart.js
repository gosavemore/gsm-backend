exports.up = function (knex) {
  return knex.schema.createTable("cart", (cart) => {
    // primary key
    cart.increments().primary();

    // user_id foreign key
    cart
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("user")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    // product_id foreign key
    cart
      .integer("product_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("product")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    cart.timestamps(true, true);
    cart.integer("quantity").notNullable();

    cart.boolean("isPaid").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cart");
};

/**
 * order.integer("itemsPrice").notNullable();
    order.integer("shippingPrice").notNullable();
    order.integer("taxPrice").notNullable();
    order.integer("totalPrice").notNullable();
    order.string("paymentMethod", 256).notNullable();
 */
