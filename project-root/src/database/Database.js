const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('meu_banco', 'sa', '123456', {
  host: 'localhost',
  dialect: 'mssql',
  logging: false,
  dialectOptions: {
    options: {
      instanceName: 'SQLEXPRESS', // 👈 ESSENCIAL
      encrypt: false,
      trustServerCertificate: true
    }
  }
});

module.exports = sequelize;