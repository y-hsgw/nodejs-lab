console.log(__dirname);
console.log(__filename);
console.log(require.main);
// 指定したモジュールの解決された絶対パスを返す
console.log(require.resolve('prettier'));
// 探索経路であり、実際に存在したpathを返すわけではない。
console.log(require.resolve.paths('typescript'));
