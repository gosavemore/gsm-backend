const db = require("../data/db-config");

module.exports = {
  getUsers,
  findUser,
  addUser,
};

function getUsers() {
  return db("user").join("address"); //.select("id", "username", "firstName", "lastName")
}

function findUser(username) {
  return db("user").join("address").where(username);
}

function addUser(data) {
  return db("user")
    .insert(data, "id")
    .then((ids) => {
      const [id] = ids;
      console.log("this is the id", id);
      return findUserId(id).select("id", "username", "firstName", "lastName");
    });
}

function findUserId(id) {
  return db("user").where({ id }).first();
}
