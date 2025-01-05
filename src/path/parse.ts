import path from 'node:path';

console.log(path.parse('/home/user/dir/file.txt'));
// Returns:
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }
