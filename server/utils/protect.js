const jwt = require("jsonwebtoken")
const User = require("../models/userModel")
const protect = async (req, res, next) => {
  let token = ""
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1]
  }
  if (!token) {
    return res.send("You are not authenticated")
  }
  const decoded = await jwt.verify(token, process.env.JWT_SECRET)
  const user = await User.findById(decoded.id)
  if (!user) {
    return res.send("User does not exists")
  }

  req.user = user
  next()
}
module.exports = protect
