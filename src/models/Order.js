const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('order', {
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
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: true,
    },
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