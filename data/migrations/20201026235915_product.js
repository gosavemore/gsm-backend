exports.up = function (knex) {
  return knex.schema.createTable("product", (product) => {
    product.increments().primary();
    product.string("productName", 256).notNullable().unique();
    product.string("image", 256).notNullable();
    product.string("brand", 256).notNullable();
    product.integer("price").notNullable();
    product.string("shortDescription", 512).notNullable();
    product.string("description", 1024).notNullable();
    product.integer("ratings").notNullable();
    product.integer("stock").notNullable();
    product.string("category").notNullable();
    product.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("product");
};
