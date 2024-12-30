import path from 'node:path';

// 末尾のディレクトリ区切り文字は無視される。
console.log(path.dirname('/foo/bar/baz/asdf/quux'));
// Returns: '/foo/bar/baz/asdf'

console.log(path.dirname('./foo'));
// Returns: '.'

console.log(path.dirname('/'));
// Returns: '/'

console.log(path.dirname('/hoge'));
// Returns: '/'
