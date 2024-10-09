const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const tasksRouter = require("./routes/tasksRouter")
const authRouter = require("./routes/authRouter")

dotenv.config({ path: "./config.env" })
app.use(express.json())
app.use(morgan("dev"))
const PORT = process.env.PORT
mongoose.connect(process.env.DATABASE_URL).then((res) => {
  app.listen(process.env.PORT, () => {
    console.log(`App is running on port ${PORT} `)
  })
})
app.use("/api/v1/tasks", tasksRouter)
app.use("/api/v1/user", authRouter)
