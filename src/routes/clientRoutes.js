const {Router} = require("express")
const clientRoutes = Router()
const {editOrder} = require("../controllers/clientController")

clientRoutes.put("/", async (req,res) => {
    try{
        const response = await editOrder(req.body)
        res.json({status:response})
    }catch(error){
        console.log(error)
    }
})

module.exports = clientRoutes