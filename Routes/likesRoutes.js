const express = require("express");
const likeControllers = require("../controller/LikesControllers");
const authenticate = require("../auth");
const router = express.Router();

router.get("/:id", likeControllers.getAllLikes);
router.post('/:id', authenticate, likeControllers.addLikes);
router.delete("/", authenticate, likeControllers.deleteLikes);


module.exports = router;