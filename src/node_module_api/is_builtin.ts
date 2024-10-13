import { isBuiltin } from 'node:module';
console.log(isBuiltin('node:fs')); // true
console.log(isBuiltin('fs')); // true
console.log(isBuiltin('wss')); // false
