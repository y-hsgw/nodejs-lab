import path from 'node:path';

console.log(path.basename('/foo/bar/baz/asdf/quux.html'));
// Returns: 'quux.html'

// 第二引数は、接尾辞を削除するための文字列を指定します。
console.log(path.basename('/foo/bar/baz/asdf/quux.html', '.html'));
// Returns: 'quux'

// 存在しない接尾辞は無視される
console.log(path.basename('/foo/bar/baz/asdf/quux.html', '.css'));
// Returns: 'quux.html'
