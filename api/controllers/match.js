const asyncHandler = require("../helpers/asyncHandler");
const MatchModel = require("../models/MatchModel");

/**
 * @desc Get All Match Events
 * GET
 */

const getAll = asyncHandler(async (req, res, next) => {
  const getAllMatches = await MatchModel.find();

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

  const getAllMatches = await MatchModel.find({ week });

  return res.status(200).json({
    success: true,
    count: getAllMatches.length,
    message: "All match events for the given week",
    data: getAllMatches,
  });
});

/**
 * @desc Create match
 * POST
 */

const createMatch = asyncHandler(async (req, res, next) => {
  const { mid } = req.params;

  // get all records
  const allRecords = await MatchModel.find().sort({ $natural: 1 });
  // get all records
  const lastRecord = allRecords.length - 1;
  // last record ids
  const lastRecordMid = Number(allRecords[lastRecord].get("mid"));
  const lastRecordSid = Number(allRecords[lastRecord].get("_sid"));
  const lastRecordRcid = Number(allRecords[lastRecord].get("_rcid"));
  const lastRecordTid = Number(allRecords[lastRecord].get("_tid"));
  const lastRecordUtid = Number(allRecords[lastRecord].get("_utid"));
  const lastRecordSeasonId = Number(allRecords[lastRecord].get("_seasonid"));
  // get last record away team
  const lastRecordAway = allRecords[lastRecord].get("teams");

  // get the match with mid
  const getMatch = await MatchModel.findOne({ mid });

  if (!getMatch) {
    return res.status(404).json({
      success: false,
      message: "No match with that id was found",
      data: null,
    });
  }

  let newMatch;
  if (getMatch) {
    newMatch = {
      id: null,

      mid: lastRecordMid + 1,
      periods: {
        p1: {
          home: getMatch.periods.p1.home,

          away: getMatch.periods.p1.away,
        },
        ft: {
          home: getMatch.periods.ft.home,

          away: getMatch.periods.ft.away,
        },
      },
      teams: {
        ...getMatch.teams,
        away: {
          ...lastRecordAway.away,
        },
      },
      docs: "match",
      _sid: lastRecordSid + 1,
      _rcid: lastRecordRcid + 1,
      _tid: lastRecordTid + 1,
      _utid: lastRecordUtid + 1,
      time: { ...getMatch.time },
      round: getMatch.round,
      roundname: getMatch.roundname,
      week: getMatch.week,
      result: { ...getMatch.result },
      _seasonid: lastRecordSeasonId + 1,
      neutralground: false,
      comment: "",
      status: "_",
      tobeannounced: false,
      postponed: false,
      canceled: false,
      inlivescore: true,
      stadiumid: "0",
      bestof: "_",
      walkover: false,
      retired: false,
      disqualified: false,
    };
  }

  const createMatch = await MatchModel.create(newMatch);

  return res.status(200).json({
    success: true,
    message: "Created match event",
    data: createMatch,
  });
});

/**
 * @desc Delete a Match Event
 * DELETE
 */

const deleteMatch = asyncHandler(async (req, res, next) => {
  const { mid } = req.params;

  const findMatch = await MatchModel.findOne({ mid });

  let matchID;
  if (findMatch) {
    matchID = findMatch.get("_id");
  }

  if (matchID) {
    await MatchModel.findByIdAndDelete(matchID);
  }

  return res.status(200).json({
    success: true,
    message: "Deleted match event",
    data: null,
  });
});

module.exports = { getAll, getMatchByWeek, createMatch, deleteMatch };
