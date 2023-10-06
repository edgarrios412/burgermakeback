const express = require("express")
const app = express()
const indexRoutes = require("./routes/index")
const cors = require("cors")

app.use(express.json())
app.use(cors())
app.use("/", indexRoutes)

module.exports = app