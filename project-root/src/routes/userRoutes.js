const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Rotas de usuário
router.get('/:id', UserController.getById);
router.post('/', UserController.create);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

module.exports = router;