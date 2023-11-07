const {Router} = require("express")
const userRoutes = require("./userRoutes")
const orderRoutes = require("./orderRoutes")
const indexRoutes = Router()

indexRoutes.use("/user",userRoutes)
indexRoutes.use("/order",orderRoutes)

module.exports = indexRoutes