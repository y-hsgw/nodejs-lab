import path from 'node:path';

// `dir`、`root`、`base` が指定された場合、
// `${dir}${path.sep}${base}` が返される。`root` は無視される。
console.log(
  path.format({
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt',
  }),
);
// Returns: '/home/user/dir/file.txt'

// `dir` が指定されていない場合は `root` が使用される。
// `dir` が `root` と等しい場合、プラットフォームのセパレータは含まれない。`ext` は無視される。
console.log(
  path.format({
    root: '/',
    base: 'file.txt',
    ext: 'ignored',
  }),
);
// Returns: '/file.txt'

// `base` が指定されていない場合は、`name` + `ext` が使用される。
console.log(
  path.format({
    root: '/',
    name: 'file',
    ext: '.txt',
  }),
);
// Returns: '/file.txt'

// `ext` にドットが指定されていない場合は、ドットが追加される。
console.log(
  path.format({
    root: '/',
    name: 'file',
    ext: 'txt',
  }),
);
// Returns: '/file.txt'
