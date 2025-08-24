import { Buffer, transcode } from 'node:buffer';

const buf = Buffer.from('€');
console.log(buf.toString('utf8'));

const newBuf = transcode(buf, 'utf8', 'ascii');
console.log(newBuf.toString('ascii'));
// Prints: '?'
