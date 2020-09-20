const asyncHandler = require("../helpers/asyncHandler");
const MatchModel = require("../models/MatchModel");

/**
 * @desc Get All Match Events
 * GET
 */

const getAll = asyncHandler(async (req, res, next) => {
  const getAllMatches = await MatchModel.find({ week: "10" });
  //   const getAllMatches = await MatchModel.findOne({ mid: 21893509 });

  return res.status(200).json({
    success: true,
    count: getAllMatches.length,
    message: "All match events",
    data: getAllMatches,
  });
});

/**
 * @desc Get All Match Events
 * GET
 */

const getMatchByWeek = asyncHandler(async (req, res, next) => {
  const { week } = req.params;

  console.log(week, "week maina");

  const getAllMatches = await MatchModel.find({ week });

  return res.status(200).json({
    success: true,
    count: getAllMatches.length,
    message: "All match events",
    data: getAllMatches,
  });
});

/**
 * @desc Get All Match Events
 * POST
 */

// const createMatch = asyncHandler(async (req, res, next) => {

//     const {  } = req.body;

//     const findMatch = await MatchModel.findOne({mid});
//     //   const getAllMatches = await MatchModel.findOne({ mid: 21893509 });

//     return res.status(200).json({
//       success: true,
//       message: "All match events",
//       data: findMatch,
//     });
//   });

module.exports = { getAll, getMatchByWeek };
