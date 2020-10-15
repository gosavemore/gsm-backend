const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const productsRouter = require("./controllers/productController");
const usersRouter = require("./controllers/userController");
const shoppingCartRouter = require("./controllers/shoppingCartController");
const authRouter = require("./controllers/authController");

const passport = require("passport");
const initializePassport = require("./config/passport-config");
const flash = require("express-flash");
const session = require("express-session");
const UsersModel = require("./models/UsersModel");

const server = express();

// PassportJS
initializePassport(
  passport,
  (email) => {
    UsersModel.findUserByEmail(email).then((emailResult) => {
      console.log(emailResult.email);
      emailResult.email;
    });
  },
  (email) =>
    UsersModel.findUserById(email).then((idResult) => {
      console.log(idResult.id);
      idResult.id;
    })
);

server.use(flash());
server.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
server.use(passport.initialize());
server.use(passport.session());
server.use(express.urlencoded({ extended: false }));
server.set("view-engine", "ejs");

server.use(helmet());
server.use(cors());
server.use(express.json());

// Routes
server.use("/products", productsRouter);
server.use("/users", usersRouter);
server.use("/shoppingCart", shoppingCartRouter);
server.use("/auth", authRouter);

// VIEW EJS
server.get("/", (req, res) => {
  res.render("index.ejs", { name: "Dennis" });
});

server.get("/auth/login", (req, res) => {
  res.render("login.ejs");
});

server.get("/auth/register", (req, res) => {
  res.render("register.ejs");
});

module.exports = server;
