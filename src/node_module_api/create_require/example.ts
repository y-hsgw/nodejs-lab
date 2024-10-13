import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

const siblingModule = require('./sibling-module.cjs');
console.log(siblingModule);
