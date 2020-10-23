exports.up = function (knex) {
  return knex.schema.createTable("products", (products) => {
    products.increments();
    products.string("productName", 256).notNullable().unique();
    products.string("image", 256).notNullable();
    products.string("brand", 256).notNullable();
    products.integer("price").notNullable();
    products.string("shortDescription", 512).notNullable();
    products.string("description", 1024).notNullable();
    products.integer("ratings").notNullable();
    products.integer("stock").notNullable();
    products.string("category").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExits("products");
};
