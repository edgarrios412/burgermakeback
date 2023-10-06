const {Router} = require("express")
const clientRoutes = Router()

clientRoutes.get("/", (req,res) => {
    res.json({users:"Retorna un array de paciente"})
})

clientRoutes.post("/", (req,res) => {
    res.json({users:"Crea un nuevo paciente"})
})

clientRoutes.put("/", (req,res) => {
    res.json({users:"Edita un paciente"})
})

module.exports = clientRoutes