const dotenv = require("dotenv");
const fs = require("fs");

const dbConnection = () => {
  const readCofig = fs.readFileSync(`${__dirname}/../dbPass.txt`);
  const parseBuffer = Buffer.from(`pass=${readCofig}`);

  dotenv.config({ path: "./config.env" });
  const parsedPass = dotenv.parse(parseBuffer);

  const dbConnectionUrl = `${process.env.DB_USERNAME}${parsedPass.pass}${process.env.DB_URL}`;

  return dbConnectionUrl;
};

module.exports = dbConnection;
