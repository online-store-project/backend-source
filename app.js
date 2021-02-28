const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');

app.use('/api', routes);

const server = app.listen(3000, function() {
    const host = server.address().address;
    const port = server.address().port;
    console.log("Server running at http://" + host + port);
})