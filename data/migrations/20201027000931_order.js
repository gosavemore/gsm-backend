exports.up = function (knex) {
  return knex.schema.createTable("order", (order) => {
    // primary key
    order.increments().primary();

    // user_id foreign key
    order
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("user")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    // product_id foreign key
    order
      .integer("product_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("product")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    order.timestamps(true, true);
    order.string("paymentMethod", 256).notNullable();
    order.integer("quantity").notNullable();
    order.integer("itemsPrice").notNullable();
    order.integer("shippingPrice").notNullable();
    order.integer("taxPrice").notNullable();
    order.integer("totalPrice").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("order");
};
