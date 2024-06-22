const { Sequelize } = require("sequelize");
const CountryModel = require("./models/Country");
const ActivityModel = require("./models/Activity");

require("dotenv").config();
const { DB_HOST, DB_USER, DB_PASSWORD, DATABASE_URL } = process.env;

const sequelize =
	process.env.NODE_ENV === "production"
		? new Sequelize(DATABASE_URL, {
				logging: false,
				dialect: "postgres",
				native: false,
				ssl: true,
				dialectOptions: {
					ssl: {
						require: true,
						rejectUnauthorized: false,
					},
					keepAlive: true,
				},
				schema: "countries_schema",
		  })
		: new Sequelize(
				`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`,
				{
					logging: false,
					// schema: "countries_schema"
				}
		  );

CountryModel(sequelize);
ActivityModel(sequelize);

const { Country, Activity } = sequelize.models;

const CountryActivity = sequelize.define(
	"CountryActivity",
	{},
	{
		timestamps: false,
		// schema: "countries_schema"
	}
);

Country.belongsToMany(Activity, { through: CountryActivity });
Activity.belongsToMany(Country, { through: CountryActivity });

module.exports = { sequelize, ...sequelize.models };
