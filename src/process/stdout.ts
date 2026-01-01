import { stdin, stdout } from 'node:process';

// printf 'hello\n' | node src/process/stdout.ts で検証
stdin.pipe(stdout);
console.log(stdout.fd);
