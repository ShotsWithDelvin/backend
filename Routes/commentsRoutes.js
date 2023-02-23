const express = require("express");

const commentControllers = require("../controller/CommentControllers");
const authenticate = require('../auth')

const router = express.Router();


router.get("/:id", commentControllers.allComments);
router.put('/:id', authenticate, commentControllers.updateComment);
router.post('/:id', authenticate, commentControllers.addComment);
router.delete('/', authenticate, commentControllers.deleteComment);

module.exports = router;