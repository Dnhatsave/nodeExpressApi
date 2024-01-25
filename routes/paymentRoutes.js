const express = require("express");
const { initateC2BPayment, externalTest, externalPost } = require("../controllers/paymentsController");
const router = express.Router();

// C2B payment
router.route("/").post(initateC2BPayment);

module.exports = router;