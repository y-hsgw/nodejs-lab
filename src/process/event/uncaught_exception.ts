import process from 'node:process';
import fs from 'node:fs';

process.on('uncaughtException', (err, origin) => {
  fs.writeSync(
    process.stderr.fd,
    `Caught exception: ${err}\n` + `Exception origin: ${origin}\n`,
  );
});

setTimeout(() => {
  console.log(
    'uncaughtExceptionではプロセスが動作しているためログに出力される',
  );
}, 500);

// 存在しない関数を呼び出して例外を発生させる
// @ts-expect-error
nonexistentFunc();
console.log('これはログに出力されない');
