module.exports = function(router){
    const playerController = require('../controllers/player.controller');

    router.delete('/players/delete/:id',playerController.deletePlayer);
    router.put('/players/edit',playerController.updatePlayer);
    router.post('/players/add',playerController.addNewPlayer);
    router.get('/players/:id',playerController.getDetailPlayer);
    router.get('/players',playerController.getAllPlayer);
}