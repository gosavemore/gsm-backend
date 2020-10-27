exports.up = function (knex) {
  return knex.schema.createTable("address", (address) => {
    address
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("user")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    address.string("houseNumber", 256).notNullable();
    address.string("streetName", 256).notNullable();
    address.string("city", 256).notNullable();
    address.integer("zip", 256).notNullable();
    address.string("state", 256).notNullable();
    address.string("country", 256).notNullable();
    address.string("phone", 30).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("address");
};
