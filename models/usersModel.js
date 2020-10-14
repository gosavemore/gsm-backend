const db = require('../data/db-config')

module.exports = {
  getUsers,
  findUser,
  addUser,
}

function getUsers() {
  return db("users").select("id", "username", "firstName", "lastName")
}

function findUser(username) {
  return db('users').where(username)
}

function addUser(data) {
  return db('users')
     .insert(data, 'id')
     .then(ids => {
       const [id] = ids;
       console.log('this is the id', id)
     return findUserId(id)
   .select('id', 'username', 'firstName', 'lastName')
    })
  
}

function findUserId(id) {
  return db("users").where({id}).first();
}