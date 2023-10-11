const {Router} = require("express")
const temperaturaRoutes = Router()
const {newTemp, getTemp} = require("../controllers/temperaturaController")

temperaturaRoutes.get("/", async (req,res) => {
    const temp = await getTemp()
    res.json(temp)
})

temperaturaRoutes.post("/", async (req,res) => {
    const temp = await newTemp(req.body)
    res.json({users:temp})
})

module.exports = temperaturaRoutes