const express = require("express")
const Router = express.Router()
const { getAllTasks } = require("../controllers/tasksController")
Router.route("").get()
module.exports = Router
