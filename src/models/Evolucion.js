const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('evolucion', {
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