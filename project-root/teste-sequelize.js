const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'meu_banco',
  'sa',
  '123456',
  {
    host: 'localhost',
    port: 1433,
    dialect: 'mssql',
    dialectOptions: {
      options: {
        encrypt: false,
        trustServerCertificate: true
      }
    },
    logging: console.log
  }
);

async function testar() {
  try {
    await sequelize.authenticate();
    console.log('SEQUELIZE CONECTOU COM SUCESSO!');
  } catch (error) {
    console.error('ERRO SEQUELIZE:', error);
  } finally {
    await sequelize.close();
  }
}

testar();