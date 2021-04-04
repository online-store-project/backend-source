const express = require('express');
const express_layouts = require('express-ejs-layouts');
const app = express();
const path = require('path');
const cookie_parser = require('cookie-parser');
const routes = require('./routes');
const port = process.env.HOST_PORT || 3000;
console.log("testi");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'frontend-source', 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express_layouts);
app.use(cookie_parser());

app.use(express.static(path.join(__dirname, 'frontend-source')));
app.use('/src', express.static(path.join(__dirname, 'frontend-source', 'src')));
app.use('/css', express.static(path.join(__dirname, 'frontend-source', 'css')));
app.use('/images', express.static(path.join(__dirname, 'frontend-source', 'images')));
app.use('/online-store', routes);

const server = app.listen(port, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log("Server running at http://" + host + port);
})

require('dotenv').config();