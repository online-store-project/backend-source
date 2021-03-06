const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');
const expressLayouts = require('express-ejs-layouts');
const port = process.env.HOST_PORT || 3000;

app.use(expressLayouts);
app.use(express.static(path.join(__dirname, 'frontend-source')));
app.use('/src', express.static(path.join(__dirname, 'frontend-source', 'src')));
app.use('/css', express.static(path.join(__dirname, 'frontend-source', 'css')));
app.use('/images', express.static(path.join(__dirname, 'frontend-source', 'images')));

app.use('/api', routes);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'frontend-source', 'views'));


const server = app.listen(port, function() {
    const host = server.address().address;
    const port = server.address().port;
    console.log("Server running at http://" + host + port);
})

require('dotenv').config();