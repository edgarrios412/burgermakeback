const {Router} = require("express")
const orderRoutes = Router()
const {editOrder, getOrderById, getOrders} = require("../controllers/orderController")

orderRoutes.put("/", async (req,res) => {
    try{
        const response = await editOrder(req.body)
        res.json({status:response})
    }catch(error){
        console.log(error)
    }
})

orderRoutes.get("/", async (req,res) => {
    const {id} = req.query
    if(id){
        try{
            const response = await getOrderById(id)
            res.json(response)
        }catch(error){
            console.log(error)
        }
    }else{
        try{
            const response = await getOrders()
            res.json(response)
        }catch(error){
            console.log(error)
        }
    }
})

module.exports = orderRoutes