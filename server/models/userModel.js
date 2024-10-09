const mongoose = require("mongoose")
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
const User = mongoose.model("user", userSchema)
module.exports = User
