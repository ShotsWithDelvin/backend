const express = require("express");

const commentControllers = require("../controller/CommentControllers");

const router = express.Router();


router.get("/:id", commentControllers.allComments);
router.post('/:id', commentControllers.addComment);
router.delete('/', commentControllers.deleteComment);

module.exports = router;