const {Router} = require("express")
const userRoutes = Router()
const {newUser, verifyUser, authUser, putUser, getUsers} = require("../controllers/userController")

userRoutes.get("/", async (req,res) => {
    const users = await getUsers()
    res.json(users)
})

userRoutes.post("/verify", async (req,res) => {
    const {status,user,token} = await verifyUser(req.body)
    res.json({status:status,user:user, token:token})
})

userRoutes.post("/auth", (req,res) => {
    const {status, user} = authUser(req.body)
    res.json({status:status, user:user})
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