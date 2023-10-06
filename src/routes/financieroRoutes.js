const {Router} = require("express")
const financieroRoutes = Router()
const {getFinanza, newPay} = require("../controllers/financieroController")

financieroRoutes.get("/", async (req,res) => {
    const finanza = await getFinanza()
    res.json(finanza)
})

financieroRoutes.post("/", async (req,res) => {
    const newPago = await newPay(req.body)
    res.json({status:newPago})
})

financieroRoutes.put("/", (req,res) => {
    res.json({users:"Edita un ingreso"})
})

financieroRoutes.delete("/", (req,res) => {
    res.json({users:"Elimina un ingreso"})
})

module.exports = financieroRoutes