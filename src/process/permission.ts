import process from 'node:process';

// デフォルトでは、アプリケーションのエントリポイントは許可されたファイルシステム読み取りリストに含まれる。
// そのため、 node --permission ./src/process/permission.ts  は true になる
console.log(process.permission.has('fs.read', './src/process/permission.ts'));
