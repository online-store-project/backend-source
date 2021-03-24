const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const path = require('path');
const routes = require('./routes');
const port = process.env.HOST_PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'frontend-source', 'views'));


app.use(express.urlencoded({ extended: true }));
app.use(expressLayouts);
app.use(express.static(path.join(__dirname, 'frontend-source')));
app.use('/src', express.static(path.join(__dirname, 'frontend-source', 'src')));
app.use('/css', express.static(path.join(__dirname, 'frontend-source', 'css')));
app.use('/images', express.static(path.join(__dirname, 'frontend-source', 'images')));
app.use('/online-store', routes);

const server = app.listen(port, function() {
    const host = server.address().address;
    const port = server.address().port;
    console.log("Server running at http://" + host + port);
})

require('dotenv').config();