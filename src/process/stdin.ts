import { stdin } from 'node:process';

console.log(stdin);
console.log(stdin.fd);

stdin.write('standard');
