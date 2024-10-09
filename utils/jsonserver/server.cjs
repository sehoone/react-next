/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const apiList = require('./dummy/apiList.cjs');
/* eslint-disable @typescript-eslint/no-var-requires */
const jsonServer = require('json-server');
//import jsonServer from 'json-server';
const server = jsonServer.create();
const router = jsonServer.router('./utils/jsonserver/db.json');
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

// server.use((req, res, next) => {
//   // 1초 딜레이 추가
//   setTimeout(next, 200);
// });

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp(req.query);
});
server.get('/apiList', (req, res) => {
  res.send(apiList);
});

const apis = {
  ...require('./dummy/member.json'),
};

apiList.forEach((x) => {
  if (apis[x.name]) {
    server[x.method](`/dummy-server${x.url}`, (req, res) => {
      res.send(JSON.stringify(apis[x.name]));
    });
  }
});

// Use default router
server.use('/dummy-server', router);
server.listen(5000, () => {
  console.log('JSON Server is running "http://localhost:5000/dummy-server"');
});
