exports.up = function (knex) {
  return knex.schema
    .createTable("category", (category) => {
      category.increments().primary();
      category.string("name", 256);
    })

    .createTable("product", (product) => {
      product.increments().primary();

      // foreign key for category
      product
        .integer("category_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("category")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      // foreign key for tag
      product
        .integer("tag_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("tag")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      product.string("productName", 256).notNullable().unique();
      product.string("image", 256).notNullable();
      product.string("brand", 256).notNullable();
      product.integer("price").notNullable();
      product.string("shortDescription", 512).notNullable();
      product.string("description", 1024).notNullable();
      product.integer("ratings").notNullable();
      product.integer("stock").notNullable();
      product.timestamps(true, true);
    })
    .createTable("tag", (tag) => {
      tag.increments().primary();

      tag
        .integer("product_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("product")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tag.string("tag", 100);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("product")
    .dropTableIfExists("tag")
    .dropTableIfExists("category");
};
