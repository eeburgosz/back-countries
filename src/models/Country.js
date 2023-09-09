const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
   sequelize.define("Country", {
      id: {
         type: DataTypes.STRING,
         primaryKey: true
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false
      },
      flag: {
         type: DataTypes.STRING,
         allowNull: false
      },
      continent: {
         type: DataTypes.STRING,
         allowNull: false
      },
      capital: {
         type: DataTypes.STRING,
         allowNull: false,
         defaultValue: "Not specified"
      },
      subregion: {
         type: DataTypes.STRING,
         defaultValue: "Not specified"
      },
      area: {
         type: DataTypes.FLOAT
      },
      population: {
         type: DataTypes.INTEGER
      }
   }, { timestamps: false });
};