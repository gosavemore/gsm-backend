exports.up = function (knex) {
  return knex.schema.createTable("user", (user) => {
    user.increments().primary();
    user.string("username", 256).notNullable().unique();
    user.string("email", 256).notNullable().unique();
    user.string("password", 256).notNullable();
    user.string("firstName", 256).notNullable();
    user.string("lastName", 256).notNullable();
    user.boolean("isAdmin", false).notNullable();
    user.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("user");
};
