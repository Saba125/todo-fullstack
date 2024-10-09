const express = require("express")
const Router = express.Router()
const { signUp, signIn } = require("../controllers/userController")
Router.post("/signup", signUp)
Router.post("/signin", signIn)

module.exports = Router
