const {Router} = require("express")
const clientRoutes = Router()
const {getClientId, getClients} = require("../controllers/clientController")

clientRoutes.get("/:id", async (req,res) => {
    const {id} = req.params
    if(id){
        const client = await getClientId(id)
        res.json(client)
    }else{
        const clients = await getClients()
        res.json(clients)
    }
})

clientRoutes.post("/", (req,res) => {
    res.json({users:"Crea un nuevo paciente"})
})

clientRoutes.put("/", (req,res) => {
    res.json({users:"Edita un paciente"})
})

module.exports = clientRoutes