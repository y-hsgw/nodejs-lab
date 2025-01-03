import path from 'node:path';

console.log(path.join('/foo', '/bar'));

// ".."で親ディレクトリに移動するため、"quux"は返されずに'/foo/bar/baz/asdf'になる・
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));
