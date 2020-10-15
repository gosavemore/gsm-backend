const router = require("express").Router();
const bcrypt = require("bcrypt");
const passport = require("passport");
const UsersModel = require("../models/usersModel");

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/auth/login",
    failureFlash: true,
  })
);

router.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const data = {
      ...req.body,
      password: hashedPassword,
    };
    await UsersModel.addUser(data);
    res.redirect("/auth/login");
  } catch (err) {
    res.redirect("/auth/register");
  }
});

module.exports = router;
