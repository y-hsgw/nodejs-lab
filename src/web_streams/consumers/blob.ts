import { Blob } from 'node:buffer';
import { blob } from 'node:stream/consumers';

const dataBlob = new Blob(['hello world from consumers!']);
console.log('dataBlob', dataBlob);
const readable = dataBlob.stream();
const data = await blob(readable);
console.log(`from readable: ${data.size}`);
// Prints: from readable: 27
