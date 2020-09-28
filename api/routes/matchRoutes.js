const express = require("express");
const {
  getAll,
  getMatchByWeek,
  createMatch,
  deleteMatch,
} = require("../controllers/match");

const router = express.Router();

router.route("/").get(getAll);
router.route("/:week").get(getMatchByWeek);
router.route("/:mid").delete(deleteMatch).post(createMatch);

module.exports = router;
