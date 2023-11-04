const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('client', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ingredients: {
      type: DataTypes.STRING,
      allowNull: true,
    }
    ,
    date: {
      type: DataTypes.STRING,
      allowNull: true,
    }
    ,
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },{timestamps:false});
};