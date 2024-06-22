const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define(
		"Activity",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			activityName: {
				type: DataTypes.STRING,
			},
			difficulty: {
				type: DataTypes.INTEGER,
				validate: {
					min: 1,
					max: 5,
				},
			},
			duration: {
				type: DataTypes.INTEGER,
			},
			season: {
				type: DataTypes.ENUM,
				values: ["summer", "autumn", "winter", "spring"],
			},
		},
		{
			timestamps: false,
			schema: "countries_schema",
		}
	);
};
