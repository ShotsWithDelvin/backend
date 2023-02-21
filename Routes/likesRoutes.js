const express = require("express");

const likeControllers = require("../controller/LikesControllers");
const authenticate = require("../auth");

const router = express.Router();

router.get("/", likeControllers.getAllLikes);
router.get("/:id", authenticate, likeControllers.getLikes);
router.post("/:id", authenticate, likeControllers.getLikes);


module.exports = router;