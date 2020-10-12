const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// Routes

server.get("/", (req, res) => {
  res.json({ api: "Backend is running" });
});

module.exports = server;
