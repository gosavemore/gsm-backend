const express = require("express");

const UsersModel = require("../models/UsersModel");

const router = express.Router();

// get users
router.get("/", (req, res) => {
  UsersModel.getUsers()
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500).json({ err: err.message }));
});

// find user
router.get("/:username", (req, res) => {
  let { username } = req.params;
  console.log(username);
  UsersModel.findUser({ username }).then((userData) => {
    const user = userData[0];
    res.status(200).json({
      username: user.username,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.password,
      houseNumber: user.houseNumber,
      streetName: user.streetName,
      city: user.city,
      zip: user.zip,
      state: user.state,
      country: user.country,
    });
  });
});

// add user
router.post("/register", (req, res) => {
  let data = req.body;
  UsersModel.addUser(data)
    .then((user) => {
      console.log(user);
      res.status(200).json(user);
    })
    .catch((err) => console.log(err));

  // 1. we need to find if the user is in the database
  // 2. if not then add

  // custom error
  // 3. if there is then return statement (user already exist)
});

module.exports = router;
