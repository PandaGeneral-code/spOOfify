const errorHandler = (err, req, res, next) =>
  res.status(err.status || err.statusCode || 500).json({
    message: err.message || "Something went wrong! Please try again later!",
  });

module.exports = { errorHandler };
