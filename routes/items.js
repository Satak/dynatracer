const express = require("express");
const {
  getItems,
  getItem,
  addItem,
  deleteItem,
} = require("../controllers/items");

const router = express.Router();

router.route("/").get(getItems).post(addItem);

router.route("/:id").get(getItem).delete(deleteItem);

module.exports = router;
