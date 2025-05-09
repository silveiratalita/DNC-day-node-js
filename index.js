const express = require('express');
const router = require('./src/router');
const server = express();

server.use(express.json());
server.use(router)

server.listen(3333, () => {
  console.log('Servidor conectado à porta 3333');
});
