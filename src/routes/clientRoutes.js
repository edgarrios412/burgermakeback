const {Router} = require("express")
const clientRoutes = Router()
const {getClientId, getClients, createClient} = require("../controllers/clientController")

clientRoutes.get("/:id", async (req,res) => {
    const {id} = req.params
    if(id !== "all"){
        const client = await getClientId(id)
        res.json(client)
    }else{
        const clients = await getClients()
        res.json(clients)
    }
})

clientRoutes.post("/", async (req,res) => {
    const newClient = await createClient(req.body)
    res.json({status:newClient})
})

clientRoutes.put("/", (req,res) => {
    res.json({users:"Edita un paciente"})
})

module.exports = clientRoutes