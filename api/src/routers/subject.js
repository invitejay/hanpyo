const Router = require('koa-router');

const router = new Router();

router.get('/', async (ctx) => {
  ctx.status = 200;
  ctx.body = 'subject main';
});

module.exports = router;
