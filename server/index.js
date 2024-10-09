const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mon")
const dotenv = require("dotenv")
dotenv.config({ path: "./config.env" })
app.use(express.json())
app.use(morgan("dev"))
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`)
})
app.get("/api/v1", (req, res) => {
  res.json({
    status: "success",
    message: "Hello world",
  })
})
