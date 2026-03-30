const sequelize = require('./src/config/database');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexão com SQL Server Express OK!');
  } catch (err) {
    console.error('❌ Falha na conexão:', err);
  } finally {
    await sequelize.close();
  }
})();