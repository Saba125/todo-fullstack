const express = require("express")
const protect = require("../utils/protect")
const Router = express.Router()
const { getAllTasks } = require("../controllers/tasksController")
Router.route("").get(protect, getAllTasks)
module.exports = Router
