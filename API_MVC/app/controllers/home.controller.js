function home(req, res) {
    res.send('Home Page');
};

function about(req, res) {
    res.send('About Page');
};

function contact(req, res) {
    res.send('Contact Page');
};

module.exports = {home, about, contact};