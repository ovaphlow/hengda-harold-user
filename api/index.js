const Koa = require('koa');
const Router = require('@koa/router');

const logger = require('../../hengda-harold/api/util/bunyan');

const app = new Koa();

app.env = 'production';

const router = new Router({
  prefix: '/api/user',
});

router.get('/sign-in', async (ctx) => {
  logger.info('1123');
  ctx.response.body = '1123';
})

app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;
