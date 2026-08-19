const Product = require('../models/Product');
const ProductImage = require('../models/ProductImage');
const ProductOption = require('../models/ProductOption');
const Category = require('../models/Category');

class ProductController {

  // Listar todos os produtos
  async search(req, res) {
    try {
      const products = await Product.findAll({
        include: [
          {
            model: ProductImage,
            as: 'images'
          },
          {
            model: ProductOption,
            as: 'options'
          },
          {
            model: Category,
            as: 'categories'
          }
        ]
      });

      return res.status(200).json(products);
    } catch (error) {
      return res.status(500).json({
        error: 'Erro ao buscar produtos.',
        details: error.message
      });
    }
  }

  // Buscar produto por ID
  async getById(req, res) {
    try {
      const product = await Product.findByPk(req.params.id, {
        include: [
          {
            model: ProductImage,
            as: 'images'
          },
          {
            model: ProductOption,
            as: 'options'
          },
          {
            model: Category,
            as: 'categories'
          }
        ]
      });

      if (!product) {
        return res.status(404).json({
          error: 'Produto não encontrado.'
        });
      }

      return res.status(200).json(product);
    } catch (error) {
      return res.status(500).json({
        error: 'Erro ao buscar produto.',
        details: error.message
      });
    }
  }

  // Criar novo produto
  async create(req, res) {
    try {
      const {
        enabled,
        nome,
        slug,
        stock,
        description,
        preco,
        price_with_discount,
        categoryIds
      } = req.body;

      const product = await Product.create({
        enabled,
        nome,
        slug,
        stock,
        description,
        preco,
        price_with_discount
      });

      // Associar categorias, caso sejam enviadas
      if (Array.isArray(categoryIds) && categoryIds.length > 0) {
        await product.setCategories(categoryIds);
      }

      const createdProduct = await Product.findByPk(product.id, {
        include: [
          {
            model: ProductImage,
            as: 'images'
          },
          {
            model: ProductOption,
            as: 'options'
          },
          {
            model: Category,
            as: 'categories'
          }
        ]
      });

      return res.status(201).json(createdProduct);

    } catch (error) {
      return res.status(400).json({
        error: 'Erro ao criar produto.',
        details: error.message
      });
    }
  }

  // Atualizar produto
  async update(req, res) {
    try {
      const product = await Product.findByPk(req.params.id);

      if (!product) {
        return res.status(404).json({
          error: 'Produto não encontrado.'
        });
      }

      const {
        enabled,
        nome,
        slug,
        stock,
        description,
        preco,
        price_with_discount,
        categoryIds
      } = req.body;

      await product.update({
        enabled,
        nome,
        slug,
        stock,
        description,
        preco,
        price_with_discount
      });

      // Atualizar categorias, caso sejam enviadas
      if (Array.isArray(categoryIds)) {
        await product.setCategories(categoryIds);
      }

      const updatedProduct = await Product.findByPk(product.id, {
        include: [
          {
            model: ProductImage,
            as: 'images'
          },
          {
            model: ProductOption,
            as: 'options'
          },
          {
            model: Category,
            as: 'categories'
          }
        ]
      });

      return res.status(200).json(updatedProduct);

    } catch (error) {
      return res.status(400).json({
        error: 'Erro ao atualizar produto.',
        details: error.message
      });
    }
  }

  // Remover produto
  async remove(req, res) {
    try {
      const product = await Product.findByPk(req.params.id);

      if (!product) {
        return res.status(404).json({
          error: 'Produto não encontrado.'
        });
      }

      await product.destroy();

      return res.status(204).send();

    } catch (error) {
      return res.status(400).json({
        error: 'Erro ao deletar produto.',
        details: error.message
      });
    }
  }
}

module.exports = new ProductController();