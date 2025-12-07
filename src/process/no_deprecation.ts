import process from 'node:process';
// node --no-deprecation src/process/no_deprecation.ts 実行で true になる
// @ts-expect-error
console.log(process.noDeprecation);
