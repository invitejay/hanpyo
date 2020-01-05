const App = require('./app');
const logger = require('./logger');

const app = new App();

app.listen(3000);
logger.info('Listening...');