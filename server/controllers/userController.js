const User = require("../models/userModel")
const generateToken = require("../utils/generateToken")
const signUp = async (req, res) => {
  try {
    const { name, email, password, passwordConfirm } = req.body
    const user = await User.create({
      name,
      email,
      password,
      passwordConfirm,
    })
    const token = generateToken(user._id)
    res.status(201).json({
      status: "success",
      token,
      data: {
        user,
      },
    })
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    })
  }
}
const signIn = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({
      status: "failed",
      message: error.message,
    })
  }
  const currentUser = await User.findOne({ email }).select("+password")
  if (
    !currentUser ||
    !(await currentUser.comparePassword(password, currentUser.password))
  ) {
    return res.status(401).json({
      status: "failed",
      message: "Incorrect email or password",
    })
  }
  const token = generateToken(currentUser._id)
  res.status(201).json({
    status: "success",
    token,
    message: "Welcome",
  })
}
module.exports = {
  signUp,
  signIn,
}
