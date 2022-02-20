module.exports = function(router){
    const clubController = require('../controllers/club.controller');

    router.delete('/clubs/delete/:id', clubController.deleteClub);
    router.put('/clubs/edit', clubController.updateClub);
    router.post('/clubs/add', clubController.addNewClub);
    router.get('/clubs/:id', clubController.getDetailClub);
    router.get('/clubs', clubController.getAllClub);
}