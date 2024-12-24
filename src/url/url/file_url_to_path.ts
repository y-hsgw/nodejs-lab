import { fileURLToPath, URL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
console.log(__filename);

const url1 = new URL('file:///C:/path/').pathname; // Incorrect: /C:/path/
console.log(url1);
const path1 = fileURLToPath('file:///C:/path/'); // Correct:   C:\path\ (Windows)
console.log(path1);

const url2 = new URL('file:///你好.txt').pathname; // Incorrect: /%E4%BD%A0%E5%A5%BD.txt
console.log(url2);
const path2 = fileURLToPath('file:///你好.txt'); // Correct:   \\nas\foo.txt (Windows)
console.log(path2);

const url3 = new URL('file:///hello world').pathname; // Incorrect: /hello%20world
console.log(url3);
const path3 = fileURLToPath('file:///hello world'); // Correct:   /hello world (POSIX)
console.log(path3);
