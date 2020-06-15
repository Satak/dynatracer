const express = require("express");
const { getItems, getItem } = require("../controllers/items");

const router = express.Router();

router.route("/").get(getItems);
router.route("/1").get(getItem);

module.exports = router;
