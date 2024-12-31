import path from 'node:path';

console.log(path.extname('index.html'));
// Returns: '.html'

console.log(path.extname('index.coffee.md'));
// Returns: '.md'

console.log(path.extname('index.'));
// Returns: '.'

console.log(path.extname('index'));
// Returns: ''

console.log(path.extname('.index'));
// Returns: ''

console.log(path.extname('.index.md'));
// Returns: '.md'
