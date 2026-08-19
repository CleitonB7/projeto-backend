const sequelize = require('../config/database');

const User = require('../models/User');
const Category = require('../models/Category');
const Product = require('../models/Product');
const ProductImage = require('../models/ProductImage');
const ProductOption = require('../models/ProductOption');

// Inicializar os Models
User.init(sequelize);
Category.init(sequelize);
Product.init(sequelize);
ProductImage.init(sequelize);
ProductOption.init(sequelize);

// Objeto com todos os Models
const models = {
  User,
  Category,
  Product,
  ProductImage,
  ProductOption
};

// Configurar associações
Object.values(models).forEach((model) => {
  if (typeof model.associate === 'function') {
    model.associate(models);
  }
});

module.exports = {
  sequelize,
  models
};