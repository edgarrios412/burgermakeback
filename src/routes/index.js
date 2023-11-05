const {Router} = require("express")
const userRoutes = require("./userRoutes")
const clientRoutes = require("./clientRoutes")
const indexRoutes = Router()

indexRoutes.use("/user",userRoutes)
indexRoutes.use("/order",clientRoutes)

module.exports = indexRoutes