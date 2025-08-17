// api/server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // adjust the path if your db.json is elsewhere
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = server;