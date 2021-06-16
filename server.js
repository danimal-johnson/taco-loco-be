const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const deliveryRouter = require('./routers/deliveries_router');

const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());
server.use('/deliveries', deliveryRouter);

module.exports = server;