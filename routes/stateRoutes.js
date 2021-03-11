const express = require("express");

const router = express.Router();
const myStateController = require("../controllers/myStateController.js");

// router.param('id', tourController.checkID);


router.get('/', myStateController.getStateData);


module.exports = router;
