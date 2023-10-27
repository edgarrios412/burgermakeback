const {Router} = require("express")
const calendarRoutes = Router()
const {getDates, postDate, deleteDate} = require("../controllers/calendarController")

calendarRoutes .get("/", async (req,res) => {
    try{
        const dates = await getDates()
        res.json(dates)
    }
    catch(error){
        console.log(error)
    }
})

calendarRoutes.post("/", async (req,res) => {
    try{
    const newDate = await postDate(req.body)
    res.json({dates:newDate})
}
catch(error){
    console.log(error)
}
})

// calendarRoutes.put("/", (req,res) => {
//     res.json({users:"Edita un evento"})
// })

calendarRoutes.delete("/:id", async (req,res) => {
    try{
    const delDate = await deleteDate(req.params.id)
    res.json({dates:delDate})
}
catch(error){
    console.log(error)
}
})

module.exports = calendarRoutes