const express = require('express');
const router = express.Router();
const meController = require('../app/controllers/MeController');

router.get('/stored/clubs', meController.storedClubs);

router.get('/trash/clubs', meController.trashClubs);

module.exports = router;
