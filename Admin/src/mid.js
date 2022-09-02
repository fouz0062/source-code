module.exports = (req, res, next) => {
  res.header("content-Range", "0-10/10");
  next();
};
