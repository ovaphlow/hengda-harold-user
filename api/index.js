const Koa = require('koa');
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');

const logger = require('../../hengda-harold/dispatcher/util/bunyan');
const postgres = require('../../hengda-harold/dispatcher/util/postgres');

const app = new Koa();

app.env = 'production';

app.use(bodyParser());

const router = new Router({
  prefix: '/api/user',
});

router.get('/sign-in', async (ctx) => {
  logger.info('1123');
  ctx.response.body = '1123';
});

router.put('/sign-in', async (ctx) => {
  const cnx = await postgres.connect();
  try {
    const sql = `
    select * from public.staff where username = $1 and password = $2 limit 1
    `;
    const result = await cnx.query(sql, [
      ctx.request.body.username,
      ctx.request.body.password,
    ]);
    if (!!result.rows.length) {
      delete result.rows[0].password;
      ctx.response.body = result.rows[0];
    } else {
      ctx.response.status = 401;
    }
  } catch (err) {
    logger.error(`--> ${ctx.request.method} ${ctx.request.url} ${err}`);
    ctx.response.status = 500;
  }
});

app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;
