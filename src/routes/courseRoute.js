const express = require('express')
const router = express.Router()
const courseController = require('../app/controllers/courseController');

// [GET]
router.get('/', courseController.index);
router.get('/create', courseController.create);
router.get('/trash', courseController.trash);
router.get('/:id/edit', courseController.edit);
router.get('/:slug', courseController.show);
// [POST]
router.post('/store', courseController.store);
// [PUT]
router.put('/:id', courseController.editAll);
// [PATCH]
router.patch('/all', courseController.actionAll);
router.patch('/:id/restore', courseController.restore);

// [DELETE]
router.delete('/:id', courseController.softDelete);
router.delete('/:id/force', courseController.delete);



module.exports = router;
