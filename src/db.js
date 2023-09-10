const { Sequelize } = require('sequelize');
const CountryModel = require('./models/Country');
const ActivityModel = require('./models/Activity');

require('dotenv').config();
const { DB_HOST, DB_USER, DB_PASSWORD, DATABASE_URL } = process.env;

// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, { logging: false });
const sequelize = new Sequelize(DATABASE_URL,
   {
      logging: false,
      dialect: "postgres",
      native: false,
      ssl: true,
      pool: {
         max: 3,
         min: 1,
         idle: 10000
      },
      dialectOptions: {
         ssl: {
            require: true,
            rejectUnauthorized: false
         },
         // keepAlive: true
      }
   });

CountryModel(sequelize);
ActivityModel(sequelize);

const { Country, Activity } = sequelize.models;

Country.belongsToMany(Activity, { through: 'CountryActivity' });
Activity.belongsToMany(Country, { through: 'CountryActivity' });

module.exports = { sequelize, ...sequelize.models };