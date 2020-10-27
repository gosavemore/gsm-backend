exports.up = function (knex) {
  return knex.schema.createTable("order", (order) => {
    // primary key
    order.increments().primary();

    // // foreign key
    order
      .integer("cart_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("cart")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    // order.specificType("orderList", "text ARRAY").references("cart_id");

    order.integer("shippingPrice").notNullable();
    order.integer("taxPrice").notNullable();
    order.integer("totalPrice").notNullable();
    order.string("paymentMethod", 256).notNullable();
    order.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("order");
};
