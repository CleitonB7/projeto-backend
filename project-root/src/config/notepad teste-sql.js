const { Connection } = require('tedious');

const config = {
  server: '127.0.0.1',

  authentication: {
    type: 'default',
    options: {
      userName: 'sa',
      password: '123456'
    }
  },

  options: {
    port: 1433,
    encrypt: false,
    trustServerCertificate: true
  }
};

const connection = new Connection(config);

connection.on('connect', (error) => {
  if (error) {
    console.error('ERRO TEDIOUS:', error);
  } else {
    console.log('CONEXÃO TEDIOUS REALIZADA COM SUCESSO!');
  }

  connection.close();
});

connection.connect();