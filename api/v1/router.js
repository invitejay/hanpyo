const Router = require('koa-router');
const subject = require('./router/subject');

const router = new Router();

router.get('/api/v1', async (ctx) => {
  ctx.status = 200;
  ctx.body = 'hello';
});

router.use('/api/v1/subject', subject.routes(), subject.allowedMethods());

module.exports = router;
