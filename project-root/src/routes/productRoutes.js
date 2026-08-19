const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');

// Listar produtos
router.get('/', ProductController.search);

// Buscar produto por ID
router.get('/:id', ProductController.getById);

// Criar novo produto
router.post('/', ProductController.create);

// Atualizar produto
router.put('/:id', ProductController.update);

// Remover produto
router.delete('/:id', ProductController.remove);

module.exports = router;