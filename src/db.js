const { Sequelize } = require('sequelize');
const CountryModel = require('./models/Country');
const ActivityModel = require('./models/Activity');

require('dotenv').config();
const { DB_HOST, DB_USER, DB_PASSWORD } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, { logging: false });

CountryModel(sequelize);
ActivityModel(sequelize);

const { Country, Activity } = sequelize.models;

Country.belongsToMany(Activity, { through: 'CountryActivity' });
Activity.belongsToMany(Country, { through: 'CountryActivity' });

module.exports = { sequelize, ...sequelize.models };