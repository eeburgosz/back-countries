const app = require('./src/app');
const { sequelize } = require('./src/db');

const PORT = 3001;

app.listen(PORT, () => {
   sequelize.sync({ force: true });
   console.log(`Listening on port ${PORT}`);
});