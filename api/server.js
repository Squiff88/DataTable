const express = require("express");
const mongoose = require("mongoose");
const mongoSanitize = require("express-mongo-sanitize");
const dotenv = require("dotenv");

const statusCodes = require("./helpers/statusCodes");
const closeServer = require("./helpers/closeServer");
const dbConnection = require("./helpers/dbConnectionHandler");
const matchRoutes = require("./routes/matchRoutes");

// Get ENV variables
dotenv.config({ path: "./config.env" });

// Get connection URL
const dbConnectionString = dbConnection();

// Connect to DB
mongoose.connect(
  dbConnectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  },
  (err) => {
    if (err) {
      console.log(err, "err connecting to the DB");
    } else {
      console.log("connected to DB");
    }
  }
);

const app = express();

/**
 * Middlewares
 */

// body parser
app.use(express.json());
// data sanitize
app.use(mongoSanitize());

// routes
app.use("/api/v1/match", matchRoutes);

// Handle 404 routes
app.all("*", (req, res, next) => {
  res.status(statusCodes["Not Found 404"]).json({
    status: "fail",
    message: `Cannot find ${req.originalUrl} on this server`,
  });
});

// Set server port
const port = process.env.PORT || 5500;

const server = app.listen(port, () => console.log(`🏃🏃🏃 on port ${port}`));

/* 
    Catch any unhandled rejections or exceptions,
    and shut down the app and the server 
*/
process.on("unhandledRejection", (err) => {
  closeServer(err, server);
});
