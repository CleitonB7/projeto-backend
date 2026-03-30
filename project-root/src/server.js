const app = require('./config/app'); // seu Express app
const database = require('./database');

const PORT = process.env.PORT || 3001;

database.connection.sync({ alter: true })
  .then(() => {
    console.log('✅ Banco de dados sincronizado com sucesso.');
    app.listen(PORT, () => {
      console.log(`✅ Servidor rodando na porta ${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Não foi possível sincronizar o banco de dados:', err);
  });