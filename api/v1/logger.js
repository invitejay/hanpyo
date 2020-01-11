const Pino = require('pino');

const logger = Pino({
  base: null
});

module.exports = logger;
