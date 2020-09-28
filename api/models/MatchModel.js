const mongoose = require("mongoose");

const matchSchema = mongoose.Schema(
  {
    docs: {
      type: String,
    },
    mid: {
      type: Number,
    },
    _sid: {
      type: Number,
    },
    _rcid: {
      type: Number,
    },
    _tid: {
      type: Number,
    },
    _utid: {
      type: Number,
    },
    time: {
      docs: {
        type: String,
      },
      time: {
        type: String,
      },
      date: {
        type: String,
      },
      tz: {
        type: String,
      },
      tzoffset: {
        type: Number,
      },
      uts: {
        type: Number,
      },
    },
    round: {
      type: Number,
    },
    roundname: {
      docs: {
        type: String,
      },
      mid: {
        type: Number,
      },
      name: {
        type: Number,
      },
    },
    week: {
      type: String,
    },
    result: {
      home: {
        type: Number,
      },
      away: {
        type: Number,
      },
      period: {
        type: String,
      },
      winner: {
        type: String,
      },
    },
    periods: {
      p1: {
        home: {
          type: Number,
        },
        away: {
          type: Number,
        },
      },
      ft: {
        home: {
          type: Number,
        },
        away: {
          type: Number,
        },
      },
    },
    _seasonid: {
      type: Number,
    },
    teams: {
      home: {
        docs: {
          type: String,
        },
        mid: {
          type: Number,
        },
        _sid: {
          type: Number,
        },
        uid: {
          type: Number,
        },
        virtual: {
          type: Boolean,
        },
        name: {
          type: String,
        },
        mediumname: {
          type: String,
        },
        abbr: {
          type: String,
        },
        nickname: {
          type: String,
        },
        iscountry: {
          type: Boolean,
        },
        haslogo: {
          type: Boolean,
        },
      },
      away: {
        docs: {
          type: String,
        },
        mid: {
          type: Number,
        },
        _sid: {
          type: Number,
        },
        uid: {
          type: Number,
        },
        virtual: {
          type: Boolean,
        },
        name: {
          type: String,
        },
        mediumname: {
          type: String,
        },
        abbr: {
          type: String,
        },
        nickname: {
          type: String,
        },
        iscountry: {
          type: Boolean,
        },
        haslogo: {
          type: Boolean,
        },
      },
    },
    neutralground: {
      type: Boolean,
    },
    comment: {
      type: String,
    },
    status: {
      type: String,
    },
    tobeannounced: {
      type: Boolean,
    },
    postponed: {
      type: Boolean,
    },
    canceled: {
      type: Boolean,
    },
    inlivescore: {
      type: Boolean,
    },
    stadiumid: {
      type: Number,
    },
    bestof: {
      type: String,
    },
    walkover: {
      type: Boolean,
    },
    retired: {
      type: Boolean,
    },
    disqualified: {
      type: Boolean,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("MatchModel", matchSchema);
