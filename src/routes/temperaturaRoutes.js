const {Router} = require("express")
const temperaturaRoutes = Router()

temperaturaRoutes.get("/", (req,res) => {
    res.json({users:"Retorna un array de temperaturas"})
})

temperaturaRoutes.post("/", (req,res) => {
    res.json({users:"Crea un nuevo temperamento"})
})

temperaturaRoutes.put("/", (req,res) => {
    res.json({users:"Edita una temperatura"})
})

temperaturaRoutes.delete("/", (req,res) => {
    res.json({users:"Elimina una temperatura"})
})

module.exports = temperaturaRoutes