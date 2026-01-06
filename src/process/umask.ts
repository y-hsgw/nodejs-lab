import { umask } from 'node:process';

const newMask = 0o002;
const oldMask = umask(newMask);
console.log(
  `Changed umask from ${oldMask.toString(8)} to ${newMask.toString(8)}`,
);
