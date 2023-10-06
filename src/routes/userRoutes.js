const {Router} = require("express")
const userRoutes = Router()
const {newUser, verifyUser, authUser, putUser} = require("../controllers/userController")

userRoutes.get("/", (req,res) => {
    res.json({users:"Retorna un array de usuarios"})
})

userRoutes.post("/verify", async (req,res) => {
    const user = await verifyUser(req.body)
    res.json(user)
})

userRoutes.post("/auth", (req,res) => {
    const user = authUser(req.body)
    res.json({status:user})
})

userRoutes.post("/", async (req,res) => {
    const user = await newUser(req.body)
    res.json({users:user})
})

userRoutes.put("/", async (req,res) => {
    const edit = await putUser(req.body)
    res.json({users:edit})
})

module.exports = userRoutes