require('dotenv').config();

const app = require('./config/app');
const { sequelize: database } = require('./database');

const PORT = process.env.PORT || 3001;

async function startServer() {
  try {
    await database.authenticate();
    console.log('Conexão com o banco de dados estabelecida.');

    await database.sync({ alter: true });
    console.log('Banco de dados sincronizado com sucesso.');

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao iniciar o servidor:', error);
    process.exit(1);
  }
}

startServer();