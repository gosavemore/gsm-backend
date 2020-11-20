exports.up = function (knex) {
  return knex.schema.createTable('requests', (requests) => {
    requests.increments().primary()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('requests')
}
