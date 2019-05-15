const express = require("express");
const moment = require("moment");

const server = express();
server.use(express.json());
// server.use("/api/posts", PostsRouter)
server.use((req, res, next) => {
  console.log(`${req.method} - ${req.url} - ${moment().format('MMMM Do YYYY, h:mm:ss a')}`);
  next();
});

server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
