import path from 'node:path';

console.log(path.normalize('/foo/bar//baz/asdf/quux/..'));
console.log(path.normalize('../foo/'));
