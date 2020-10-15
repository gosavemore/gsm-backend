const db = require("../data/db-config");

module.exports = {
  getUsers,
  findUser,
  findUserByEmail,
  findUserById,
  addUser,
};

function getUsers() {
  return db("users").select("id", "username", "firstName", "lastName", "email");
}

function findUser(username) {
  return db("users").where(username);
}

function addUser(data) {
  return db("users")
    .insert(data, "id")
    .then((ids) => {
      const [id] = ids;
      console.log("this is the id", id);
      return findUserId(id).select("id", "username", "firstName", "lastName");
    });
}

function findUserById(value) {
  return value;
  return db("users").where({ value }).select(`${value}`);
}

function findUserByEmail(email) {
  return db("users").where({ email }).first();
}
