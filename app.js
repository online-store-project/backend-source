const express = require('express');
const app = express();
const path = require('path');
const body_parser = require('body-parser');
const routes = require('./routes');

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'frontend-source')));
app.use('/api', routes);

const server = app.listen(8081, function() {
    const host = server.address().address;
    const port = server.address().port;
    console.log("Server running at http://" + host + port);
})