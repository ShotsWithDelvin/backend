const express = require("express");

const commentControllers = require("../controller/CommentControllers");

const router = express.Router();

router.get("/:id", commentControllers.allComments);

router.post("/comment", commentControllers.addComment);

module.exports = router;