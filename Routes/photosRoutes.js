const express = require("express");
const photoController = require("../controller/PhotoControllers.js");
const authenticate = require("../auth");

const router = express.Router();

router.get("/", photoController.getAllPhotos);
router.get("/:id", authenticate, photoController.getPhoto);

module.exports = router; 