module.exports = (err, server = null) => {
  console.log(err.name, err.message);

  if (!server) {
    return process.exit(1);
  }

  server.close(() => process.exit(1));
};
