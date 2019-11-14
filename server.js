const express = require('express');

const accountRoute = require("./accountRoute")

const server = express();

server.use(express.json());
server.use("/account", accountRoute)



module.exports = server;