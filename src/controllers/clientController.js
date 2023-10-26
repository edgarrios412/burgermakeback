const {Client} = require("../db")

module.exports = {
    getClients: async () => {
        const clients = await Client.findAll()
        return clients
    },
    getClientId: async (data) => {
        const client = await Client.findOne({where:{
            id:data
        }})
        return client
    },
}