const { Activity, Country } = require("../db");
const { infoCountriesApi } = require("../utils/api");

(async () => {
   const countries = await infoCountriesApi();
   const db = await Country.findAll();
   !db ? await Country.bulkCreate(countries) : null;
})();

const createActivity = async (countryId, activityName, difficulty, duration, season) => {
   const exist = await Activity.findOne({
      where: {
         activityName
      }
   });
   if (exist) throw new Error("Activity already exists");

   const newActivity = await Activity.create({ activityName, difficulty, duration, season });

   const countries = await Country.findAll({
      where: {
         id: countryId
      }
   });
   await newActivity.addCountries(countries);
   return newActivity;
};

module.exports = { createActivity };