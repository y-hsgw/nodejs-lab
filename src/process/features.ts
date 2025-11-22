import { features } from 'node:process';

console.log('features', features);
console.log('cached_builtins', features.cached_builtins);
console.log('require_module', features.require_module);
console.log('typescript', features.typescript);
