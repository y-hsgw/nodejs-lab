import path from 'node:path';

console.log(path.resolve('/foo/bar', './baz'));
// Returns: '/foo/bar/baz'

console.log(path.resolve('/foo/bar', '../baz'));
// Returns: '/foo/baz'

console.log(path.resolve('/foo/bar', '/tmp/file/'));
// Returns: '/tmp/file'

console.log(path.resolve());
// Returns: '/home/myself/nodejs-lab'

console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));
// If the current working directory is /home/myself/node,
// this returns '/home/myself/node/wwwroot/static_files/gif/image.gif'
