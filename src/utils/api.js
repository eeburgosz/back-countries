const axios = require("axios");

const infoCountriesApi = async () => {
	const URL = "https://restcountries.com/v3/all";
	const resp = (await axios.get(URL)).data;
	const data = resp.map((d) => ({
		name: d.name.common,
		id: d.cca3,
		capital: d.capital,
		population: d.population,
		continent: d.region,
		subregion: d.subregion,
		area: d.area,
		flag: d.flags[0],
		maps: d.maps.openStreetMaps,
	}));
	return data;
};

module.exports = {
	infoCountriesApi,
};
