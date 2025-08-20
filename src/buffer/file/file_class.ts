import { File } from 'node:buffer';

const file = new File(['hello'], 'test-file.txt', {
  endings: 'native',
  type: 'text/plain',
});
console.log(file);
