import { URL } from 'node:url';
import { Blob, resolveObjectURL } from 'node:buffer';

const blob = new Blob(['hello😄'], { type: 'text/plain' });
const id = URL.createObjectURL(blob);
console.log(id);

const before = resolveObjectURL(id);
console.log(before);

URL.revokeObjectURL(id);

const after = resolveObjectURL(id);
console.log(after);
