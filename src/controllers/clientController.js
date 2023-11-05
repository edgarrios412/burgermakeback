const {Client, Order} = require("../db")

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
}