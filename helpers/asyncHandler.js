const asyncHandler = (fn) => (req, res, next) => {
  return Promise.resolve(fn(req, res, next)).catch((err) => {
    console.log(err, "caught !!! 👮👮👮");
    next(err);
  });
};

module.exports = asyncHandler;
