const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('user', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastname:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    email:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    password:{
      type: DataTypes.STRING,
      allowNull: true,
    }
  },{timestamps:false});
};