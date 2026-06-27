const timer = (req, res, next) => {
  req.startTime = Date.now();
  next();
};

export default timer;
