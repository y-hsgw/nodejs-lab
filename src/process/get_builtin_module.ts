import { getBuiltinModule } from 'node:process';

console.log(getBuiltinModule('http'));
console.log(getBuiltinModule('invalid'));
