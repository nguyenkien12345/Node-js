module.exports = function(router){
    const homeController = require('../controllers/home.controller');

    router.get('/about', homeController.about);
    router.get('/contact', homeController.contact);
    router.get('/', homeController.home);
}