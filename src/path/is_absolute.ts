import path from 'node:path';

console.log(path.isAbsolute('/foo/bar')); // true
console.log(path.isAbsolute('/baz/..')); // true
console.log(path.isAbsolute('qux/')); // false
console.log(path.isAbsolute('.')); // false
