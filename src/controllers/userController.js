const {User} = require("../db")
const jwt = require("jsonwebtoken")

module.exports = {
    newUser: async (data) => {
        await User.create(data)
        return "Usuario creado"
    },
    verifyUser: async (data) => {
       const user = await User.findAll({
            where:{
                email:data.email,
                password: data.password
            }
        })
        // console.log(user.lenght)
        const token = jwt.sign("hola", "natalie")
        console.log(token)
        if(user.length) return {status:true, token:token}
        return {status:false}
    },
    authUser: (data) => {
        const res = jwt.verify(data.token,"natalie")
        if(res) return true
        return false
    },
    putUser: async (data) => {
        const user = await User.findOne({
            where:{
                id:data.id,
                password:data.oldpass
            }
        })
        if(user){
            user.password = data.newpass
            user.save()
            return "Contraseña actualizada"
        }
        return "Contraseña anterior invalida"
    }
}