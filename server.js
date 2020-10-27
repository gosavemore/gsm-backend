const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const productsRouter = require("./controllers/productController");
const adminRouter = require("./controllers/adminController");
const authRouter = require("./controllers/authController.js");
const orderRouter = require("./controllers/orderController");
const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

// Routes
server.use("/products", productsRouter);
server.use("/admin", adminRouter); // RUD function admin previledge
server.use("/auth", authRouter); // registration and login
server.use("/orders", orderRouter); // orders
server.get("/", (req, res) => {
  res.json({ api: "Backend is running" });
});

module.exports = server;
