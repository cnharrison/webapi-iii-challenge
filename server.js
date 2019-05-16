const express = require("express");
const moment = require("moment");

const PostsRouter = require("./posts/postsRouter.js");
const UserRouter = require("./users/userRouter.js");

const server = express();
server.use(express.json());
server.use("/api/posts", PostsRouter)
server.user("/api/users", UserRouter)
server.use(logger);


server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

function logger(req, res, next) {
  console.log(
    `${req.method} - ${req.url} - ${moment().format("MMMM Do YYYY, h:mm:ss a")}`
  );
  next();
}

function validateUser(req, res, next) {}
module.exports = server;
