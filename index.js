const express = require('express');
const carsRouter = require('./cars/router');

const server = express();

server.use(express.json());

server.use('/cars', carsRouter);

const port = 4000;
server.listen(port, () => console.log(`Server running on ${port}`));