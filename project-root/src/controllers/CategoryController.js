const Category = require('../models/Category');

class CategoryController {

  async search(req, res) {
    try {
      const categories = await Category.findAll();
      return res.status(200).json(categories);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao buscar categorias' });
    }
  }

  async getById(req, res) {
    try {
      const category = await Category.findByPk(req.params.id);
      if (!category) {
        return res.status(404).json({ error: 'Categoria não encontrada' });
      }
      return res.status(200).json(category);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao buscar categoria' });
    }
  }

  async create(req, res) {
    try {
      const category = await Category.create(req.body);
      return res.status(201).json(category);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao criar categoria' });
    }
  }

  async update(req, res) {
    try {
      const category = await Category.findByPk(req.params.id);
      if (!category) {
        return res.status(404).json({ error: 'Categoria não encontrada' });
      }

      await category.update(req.body);
      return res.status(200).json(category);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao atualizar categoria' });
    }
  }

  async remove(req, res) {
    try {
      const category = await Category.findByPk(req.params.id);
      if (!category) {
        return res.status(404).json({ error: 'Categoria não encontrada' });
      }

      await category.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao deletar categoria' });
    }
  }
}

module.exports = new CategoryController();