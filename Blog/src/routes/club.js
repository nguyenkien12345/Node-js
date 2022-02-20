const express = require('express');
const router = express.Router();
const ClubController = require('../app/controllers/ClubController');

router.get('/create', ClubController.create);

router.post('/store', ClubController.store);

router.get('/:id/edit', ClubController.edit);

router.put('/:id', ClubController.update);

router.delete('/:id', ClubController.destroy);

router.delete('/:id/force', ClubController.forceDestroy);

router.patch('/:id/restore', ClubController.restore)

router.get('/:slug', ClubController.show);

module.exports = router;
