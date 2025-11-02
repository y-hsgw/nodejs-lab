import { argv } from 'node:process';

// node src/process/argv.ts one two=three four
// 上記を実行するとコマンドライン引数（one two=three four）がログに出力される
argv.forEach((value, index) => {
  console.log(`${index}: ${value}`);
});
