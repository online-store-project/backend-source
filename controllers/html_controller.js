const path = require('path');
const html = path.join(__dirname, '../frontend-source', 'html');

const show_html_mainpage = function(req, res) {
    res.sendFile(path.join(html, 'mainpage.html'));
}
module.exports = {
    show_html_mainpage
}