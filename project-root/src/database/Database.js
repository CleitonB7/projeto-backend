module.exports = {
  username: 'sa',
  password: '123456', // sua senha aqui
  database: 'meu_banco', // nome que você criou
  host: 'localhost',
  dialect: 'mssql',
  logging: false,

  dialectOptions: {
    options: {
      encrypt: false,
      trustServerCertificate: true
    }
  }
};

module.exports = { sequelize };