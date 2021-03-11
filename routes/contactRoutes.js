const express = require("express");

const router = express.Router();
const contactController = require("../controllers/contactController.js");

// router.param('id', tourController.checkID);

router
  .route("/")
  .post(contactController.getContactsByZipCode)

module.exports = router;
