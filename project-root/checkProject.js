// checkProject.js
const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, 'src');

// Estrutura esperada do projeto
const expectedStructure = {
  config: ['database.js'],
  database: ['Database.js'],
  models: ['User.js', 'Category.js', 'Product.js', 'ProductImage.js', 'ProductOption.js'],
  routes: ['userRoutes.js', 'categoryRoutes.js', 'productRoutes.js'],
  '': ['server.js', 'index.js'] // arquivos diretamente dentro de src
};

function checkFolder(folder, items) {
  const folderPath = path.join(projectRoot, folder);
  if (!fs.existsSync(folderPath)) {
    console.log(`❌ Pasta faltando: src/${folder}`);
    return;
  }
  items.forEach(item => {
    const itemPath = path.join(folderPath, item);
    if (!fs.existsSync(itemPath)) {
      console.log(`❌ Arquivo faltando: src/${folder ? folder + '/' : ''}${item}`);
    } else {
      console.log(`✅ Encontrado: src/${folder ? folder + '/' : ''}${item}`);
    }
  });
}

console.log('🔎 Verificando estrutura do projeto...');
for (const [folder, items] of Object.entries(expectedStructure)) {
  checkFolder(folder, items);
}
