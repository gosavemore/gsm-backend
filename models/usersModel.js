const db = require('../data/db-config')

module.exports = {
  find,
}

function find() {
  console.log('find model fired')
  return db('users')
}
