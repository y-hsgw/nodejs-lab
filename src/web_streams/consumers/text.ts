import { text } from 'node:stream/consumers';
import { Readable } from 'node:stream';

const readable = Readable.from('Hello world from consumers!');
const data = await text(readable);
console.log(data);
console.log(`from readable: ${data.length}`);
// Prints: from readable: 27
