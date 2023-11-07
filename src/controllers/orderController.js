const {User, Order} = require("../db")

module.exports = {
    editOrder: async (data) => {
        const order = await Order.findByPk(data.id)
        if(order){
            for (const key in data) {
                    order[key] = data[key];
              }
            await order.save()
            return order
        }else return "No encontramos la orden"
    },
    getOrders: async () => {
        const order = await Order.findAll({include:User})
        return order
    },
    getOrderById: async (id) => {
        const order = await Order.findByPk(id,{
            include: User, // Esto cargará los datos del usuario relacionado
        })
        return order
    },
}