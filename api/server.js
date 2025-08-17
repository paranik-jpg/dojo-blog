// api/server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // path is relative to the project root
const middlewares = jsonServer.defaults();

server.use(middlewares);
// Optionally rewrite routes for /api
server.use(jsonServer.rewriter({
  '/api/*': '/$1',
}));

server.use(router);

module.exports = server;
