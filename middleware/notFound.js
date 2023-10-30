const notFoundRoute = (req, res, next) => {
  res.status(404).json({ message: "Route not fond" });
};

module.exports = notFoundRoute;
