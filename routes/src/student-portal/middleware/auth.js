const authcheck = (req, res, next) => {
  const token = req.header("token");
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
};

export default authcheck;
