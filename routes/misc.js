const express = require("express");
const { getHelp, getInfo, getMessage } = require("../controllers/misc");

const router = express.Router();

router.route("/help").get(getHelp);
router.route("/info").get(getInfo);
router.route("/message").get(getMessage);

module.exports = router;
