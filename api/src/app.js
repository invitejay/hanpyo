const Koa = require('koa');
const router = require('./router');

class App extends Koa {
  constructor(...params) {
    super(...params);
    this.server = null;

    this.use(router.routes());
    this.use(router.allowedMethods());
  }

  listen(...args) {
    const server = super.listen(...args);
    this.server = server;
    return server;
  }

  async terminate() {
    if (this.server != null) {
      this.server.close();
    }
  }
}

module.exports = App;
