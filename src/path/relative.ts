import path from 'node:path';

console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'));
// Returns: '../../impl/bbb'
