const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('client', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },{timestamps:false});
};