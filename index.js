const app = require('./src/app');
const { sequelize } = require('./src/db');

require('dotenv').config();
const { PORT } = process.env;

const port = PORT || 3001;

app.listen(port, () => {
   sequelize.sync({ alter: true });
   console.log(`Listening on port ${port}`);
});