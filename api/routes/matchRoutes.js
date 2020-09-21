const express = require("express");
const { getAll, getMatchByWeek } = require("../controllers/match");

const router = express.Router();

router.route("/").get(getAll);
router.route("/:week").get(getMatchByWeek);

module.exports = router;
