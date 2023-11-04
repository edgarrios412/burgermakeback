const {User, Order} = require("../db")
const jwt = require("jsonwebtoken")

module.exports = {
    newUser: async (data) => {
        await User.create(data)
        return "Usuario creado"
    },
    verifyUser: async (data) => {
       const user = await User.findAll({
            where:{
                phone:data.phone,
                password: data.password
            }
        })
        // console.log(user.lenght)
        if(user.length){
            const token = jwt.sign({id:user[0].id, phone:user[0].phone, role:user[0].role, name:user[0].name,lastname:user[0].lastname, image:user[0].image}, "natalie")
            // console.log(user)
            // console.log(token)
            if(user.length) return {status:true, token:token, user:{id:user[0].id, phone:user[0].phone, role:user[0].role, name:user[0].name,lastname:user[0].lastname, image:user[0].image}}
        }
        return {status:false}
    },
    authUser: (data) => {
        const res = jwt.verify(data.token,"natalie")
        if(res) return {status:true, user:res}
        return false
    },
    putUser: async (data) => {
        const user = await User.findOne({where:{
            id: data.id
        }})
        if(user){
            for (const key in data) {
                    user[key] = data[key];
              }
            await user.save()
            return user
        }else return "No encontramos el usuario"
    },
    getUsers: async () => {
        const users = await User.findAll()
        return users
    },
    getUserById: async (userid) => {
        const users = await User.findOne({where:{id:userid}, include:Order})
        return users
    },
    newOrder: async (data) => {
        const user = await User.findByPk(data.userId)
        const order = await Order.create(data)
        await user.addOrder(order)
        return "Exitoso"
    }
}