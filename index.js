require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const deliveryRouter = require('./routers/deliveries.js');

const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());
server.use('/deliveries', deliveryRouter);

const PORT = process.env.PORT || 6000;
server.listen(PORT, () => {
  console.log(`\n=== Server listening on port ${PORT} ===\n`);
});
