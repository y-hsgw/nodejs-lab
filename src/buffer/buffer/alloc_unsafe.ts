import { Buffer } from 'node:buffer';

console.log(Buffer.allocUnsafe(5000).toString('utf-8'));
