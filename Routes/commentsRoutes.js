const express = require("express");

const commentControllers = require("../controller/CommentControllers");

const router = express.Router();

router.get("/", commentControllers.allComments);

router.post("/:id", commentControllers.addComment);

module.exports = router;