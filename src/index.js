const express = require("express");
const { router } = require("./router");
const server = express();
server.use(express.json());
server.use(router);
server.listen(3333, (err) => {
  if (err) {
    console.log(err);
    return process.exit(1);
  }
  console.log("Escola DCN conectada à porta 3333!");
});
