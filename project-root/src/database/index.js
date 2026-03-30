const { Sequelize } = require('sequelize');
const dbConfig = require('../config/database');

// Importar modelos
const User = require('../models/User');
const Category = require('../models/Category');
const Product = require('../models/Product');
const ProductImage = require('../models/ProductImage');
const ProductOption = require('../models/ProductOption');

const models = [User, Category, Product, ProductImage, ProductOption];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);

    // Inicializa todos os modelos
    models.forEach(model => model.init(this.connection));

    // Associa os modelos se tiver relacionamento
    models.forEach(model => {
      if (model.associate) {
        model.associate(this.connection.models);
      }
    });
  }
}

module.exports = new Database();