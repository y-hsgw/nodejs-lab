import { access, constants } from 'node:fs';

const file = 'package.json';

// ファイルの存在チェック
access(file, constants.F_OK, (err) => {
  console.log(`${file} ${err ? 'does not exist' : 'exists'}`);
});

// ファイルが読み取り可能かチェック
access(file, constants.R_OK, (err) => {
  console.log(`${file} ${err ? 'is not readable' : 'is readable'}`);
});

// ファイルが書き込み可能かチェック
access(file, constants.W_OK, (err) => {
  console.log(`${file} ${err ? 'is not writable' : 'is writable'}`);
});

// ファイルが書き込みと読み取り可能かチェック
access(file, constants.R_OK | constants.W_OK, (err) => {
  console.log(`${file} ${err ? 'is not' : 'is'} readable and writable`);
});

// ファイルが実行可能かチェック
access(file, constants.X_OK, (err) => {
  console.log(`${file} ${err ? 'is not' : 'is'} executable`);
});
