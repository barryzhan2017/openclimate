const express = require("express");

const router = express.Router();
const myStateController = require("../controllers/myStateController.js");
const updateStateController = require("../controllers/updateStatesController.js");

// router.param('id', tourController.checkID);


router.get('/', myStateController.getStateData);
router.get('/update', updateStateController.updateData);


module.exports = router;
