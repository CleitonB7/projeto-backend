const { Model, DataTypes } = require('sequelize');

class Category extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: DataTypes.STRING,
        allowNull: false
      },

      slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },

      use_in_menu: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },

    }, {
      sequelize,
      tableName: 'categorias',
    });
  }

  static associate(models) {
    this.belongsToMany(models.Product, {
      through: 'produtos_categorias',
      foreignKey: 'category_id',
      otherKey: 'product_id',
      as: 'products'
    });
  }
}

module.exports = Category;