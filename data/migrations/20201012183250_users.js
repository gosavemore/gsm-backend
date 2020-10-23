exports.up = function (knex) {
  return knex.schema.createTable("users", (users) => {
    users.increments();
    users.string("username", 256).notNullable().unique();
    users.string("email", 256).notNullable().unique();
    users.string("password", 256).notNullable();
    users.string("firstName", 256).notNullable();
    users.string("lastName", 256).notNullable();
    users.string("houseNumber", 256).notNullable();
    users.string("streetName", 256).notNullable();
    users.string("city", 256).notNullable();
    users.integer("zip", 256).notNullable();
    users.string("state", 256).notNullable();
    users.string("country", 256).notNullable();
    users.boolean("isAdmin", false).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
