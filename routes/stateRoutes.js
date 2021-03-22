const express = require("express");

const router = express.Router();
const myStateController = require("../controllers/myStateController.js");
const updateStatesController = require("../controllers/updateStatesController.js");

// router.param('id', tourController.checkID);

router.get('/update/', updateStatesController.updateData);
router.get('/', myStateController.getStateData);


module.exports = router;
