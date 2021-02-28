const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');
const html = path.join(__dirname, 'frontend-source', 'html');

app.use('/api', routes);

const server = app.listen(3000, function() {
    const host = server.address().address;
    const port = server.address().port;
    console.log("Server running at http://" + host + port);
})