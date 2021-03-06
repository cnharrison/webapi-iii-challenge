const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
  const { id, name } = req.body;
  if (!id || !name) {
    res
      .status(400)
      .json({ errorMessage: "Need both an ID and a name, plz+thku" });
  }
  try {
    await db.insert({
      id,
      name
    });
    res.status(201).json(req.body);
  } catch {
    res.status(404).json({ error: "Could not add this user to the db" });
  }
});

router.post("/:id/posts", (req, res) => {});

router.get("/", (req, res) => {});

router.get("/:id", (req, res) => {});

router.get("/:id/posts", (req, res) => {});

router.delete("/:id", (req, res) => {});

router.put("/:id", (req, res) => {});

//custom middleware

function validateUserId(req, res, next) {}

function validateUser(req, res, next) {}

function validatePost(req, res, next) {}

module.exports = router;
