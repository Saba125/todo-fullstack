const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide valid email"],
  },
  photo: String,
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm a password"],
    minlength: 8,
    validate: {
      validator: function (el) {
        return el === this.password
      },
    },
  },
})
userSchema.pre("save", async function (next) {
  const hashedPassword = await bcrypt.hash(this.password, 12)
  this.password = hashedPassword
  this.passwordConfirm = undefined
  next()
})
userSchema.methods.comparePassword = async function (
  candidatePassword,
  password
) {
  return await bcrypt.compare(candidatePassword, password)
}
const User = mongoose.model("user", userSchema)
module.exports = User
