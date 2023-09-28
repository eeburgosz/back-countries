const { Sequelize } = require('sequelize');
const CountryModel = require('./models/Country');
const ActivityModel = require('./models/Activity');

const pg = require('pg');

require('dotenv').config();
const { DB_HOST, DB_USER, DB_PASSWORD, DATABASE_URL } = process.env;

const sequelize = process.env.NODE_ENV === 'production' ? new Sequelize(DATABASE_URL,
   {
      logging: false,
      dialect: "postgres",
      native: false,
      ssl: true,
      dialectOptions: {
         ssl: {
            require: true,
            rejectUnauthorized: false
         },
         keepAlive: true
      }
   }) :
   new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, { logging: false });

CountryModel(sequelize);
ActivityModel(sequelize);

const { Country, Activity } = sequelize.models;

Country.belongsToMany(Activity, { through: 'CountryActivity' });
Activity.belongsToMany(Country, { through: 'CountryActivity' });

module.exports = { sequelize, ...sequelize.models };