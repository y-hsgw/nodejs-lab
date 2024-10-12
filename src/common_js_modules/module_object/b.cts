const a = require('./a.cjs');
a.on('ready', () => {
  console.log('module "a" is ready');
});
