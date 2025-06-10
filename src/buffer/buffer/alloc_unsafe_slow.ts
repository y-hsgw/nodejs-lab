import { Buffer } from 'node:buffer';

console.log(Buffer.allocUnsafeSlow(10));
console.log(Buffer.allocUnsafeSlow(2000));
