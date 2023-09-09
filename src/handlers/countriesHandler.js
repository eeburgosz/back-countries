const { getCountryById, getCountryByName, getAllCountries } = require("../controllers/countryController");

const getCountriesHandler = async (req, res) => {
   const { name } = req.query;
   try {
      const result = name ? await getCountryByName(name) : await getAllCountries();
      res.status(200).json(result);
   } catch (error) {
      res.status(404).json({ error: error.message });
   }

};
const getCountryByIdHandler = async (req, res) => {
   const { id } = req.params;
   try {
      const countryById = await getCountryById(id);
      res.status(200).json(countryById);
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
};

module.exports = {
   getCountriesHandler,
   getCountryByIdHandler
};