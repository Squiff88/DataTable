const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { modeledData } = require("../models/modelJsonData");
const MatchModel = require("../models/MatchModel");
const dbConnection = require("../helpers/dbConnectionHandler");

dotenv.config({ path: "../config.env" });

const mongoURL = dbConnection();

mongoose.connect(mongoURL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const importData = async () => {
  await MatchModel.create(modeledData);

  console.log("success !!!! 🎆🎆🎆");
  process.exit();
};

const deleteData = async () => {
  try {
    MatchModel.collection.remove({});

    console.log("deleted data !!!! 🕯🕯🕯");
    process.exit();
  } catch (error) {
    console.log(error, "💣💣💣💣💣💣💣");
  }
};

if (process.argv[2] === "import") {
  importData();
}

if (process.argv[2] === "delete") {
  deleteData();
}
