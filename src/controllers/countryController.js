const { Op } = require("sequelize");
const { Country, Activity } = require("../db");
const { infoCountriesApi } = require("../utils/api");

//! Carga de los datos de la API en la DB. Podría pribar hacerlo desde una ruta /------
(async () => {
   const countries = await infoCountriesApi();
   return await Country.bulkCreate(countries);
})();
//!--------------------------------------------
const getAllCountries = async () => {
   return await Country.findAll({
      attributes: {
         exclude: ['capital', 'subregion', 'area', 'population']
      },
      include: [{ model: Activity }]
   });
};

const getCountryById = async (id) => {
   return await Country.findByPk(id, {
      include: [{
         model: Activity
      }]
   });
};

const getCountryByName = async (name) => {
   return await Country.findAll({
      where: {
         name: {
            [Op.iLike]: `%${name}%`
         }
      },
      include: [{
         model: Activity
      }]
   });
};

module.exports = {
   getCountryById,
   getCountryByName,
   getAllCountries
};