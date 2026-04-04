// @ts-expect-error
import { bytes } from 'node:stream/consumers';
import { Readable } from 'node:stream';

const dataBuffer = Buffer.from('hello world from consumers!');

const readable = Readable.from(dataBuffer);
const data = await bytes(readable);
console.log(data);
console.log(`from readable: ${data.length}`);
// Prints: from readable: 27
