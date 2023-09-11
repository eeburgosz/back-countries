const { createActivity } = require("../controllers/activityControllers");

const createActivityHandler = async (req, res) => {
   const { countryId, activityName, difficulty, duration, season } = req.body;
   try {
      const newActivity = await createActivity(countryId, activityName, difficulty, duration, season);
      res.status(201).json(newActivity);
   } catch (error) {
      res.status(400).json({ error: error.message });
   }

};

module.exports = { createActivityHandler };