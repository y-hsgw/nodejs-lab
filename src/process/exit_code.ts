import process from 'node:process';

process.on('exit', (code) => {
  console.log('[exit] code =', code);
});

console.log(process.exitCode);
process.exitCode = 9;
