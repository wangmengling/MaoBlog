// const Koa = require('koa');
// const Koa import "koa";
import Static from 'koa-static';
import Send from 'koa-send';
import Koa from 'koa';
import path from 'path';
const app = new Koa();

// x-response-time

app.use(async function (ctx, next) {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// logger

app.use(async function (ctx, next) {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});


import webpackDevConfig from './webpack.config.js'
// import webpackDevMiddleware from 'webpack-dev-middleware'
// import webpackHotMiddleware from 'webpack-hot-middleware'
// import middleware from 'koa-webpack';
import webpackMiddleware from "webpack-koa2-middleware"
import webpack from 'webpack'

//webpack--------
var compiler = webpack(webpackDevConfig);
app.use(webpackMiddleware(compiler, { serverSideRender: true }));

//Api router--------
import Router from './router/router';
app.use(Router.routes());


// app.use(Express.static(path.join(__dirname, 'static')));
// app.get("/*", function(req, res) {
//   res.sendFile(__dirname + '/static/index.html');
// });

app.use(Static(path.join(__dirname, 'static')));
app.use(async (ctx) => {
  await Send(ctx, '/static/index.html');
})
app.listen(3000);

if (module.hot) {
  module.hot.accept()
}