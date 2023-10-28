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
    createClient: async (data) => {
        await Client.create(data)
        return "Creado con exito"
    },
    editClient: async (data) => {
        const client = await Client.findOne({where:{
            id: data.id
        }})
        if(client){
            for (const key in data) {
                    client[key] = data[key];
              }
            await client.save()
            return client
        }else return "No encontramos el usuario"
    }
}