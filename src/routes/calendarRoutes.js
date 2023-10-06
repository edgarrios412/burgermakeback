const {Router} = require("express")
const calendarRoutes = Router()
const {getDates, postDate, deleteDate} = require("../controllers/calendarController")

calendarRoutes .get("/", async (req,res) => {
    const dates = await getDates()
    res.json(dates)
})

calendarRoutes.post("/", async (req,res) => {
    const newDate = await postDate(req.body)
    res.json({dates:newDate})
})

// calendarRoutes.put("/", (req,res) => {
//     res.json({users:"Edita un evento"})
// })

calendarRoutes.delete("/:id", async (req,res) => {
    const delDate = await deleteDate(req.params.id)
    res.json({dates:delDate})
})

module.exports = calendarRoutes