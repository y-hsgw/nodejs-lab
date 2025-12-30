import { stderr } from 'node:process';

console.log(stderr);
console.log(stderr.fd);

stderr.write('error');
