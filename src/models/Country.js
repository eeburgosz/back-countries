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
         defaultValue: "Unknown"
      },
      subregion: {
         type: DataTypes.STRING,
         defaultValue: "Unknown"
      },
      area: {
         type: DataTypes.FLOAT
      },
      population: {
         type: DataTypes.INTEGER
      }
   }, { timestamps: false });
};