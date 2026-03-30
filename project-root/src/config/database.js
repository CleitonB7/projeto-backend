require('dotenv').config();

module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: 'mssql',
  logging: false,
  port: 1433,
  dialectOptions: {
    options: {
      encrypt: false,
      trustServerCertificate: true
    }
  }
};