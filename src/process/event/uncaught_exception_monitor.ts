import process from 'node:process';

process.on('uncaughtExceptionMonitor', (err, origin) => {
  console.log(`Caught exception: ${err}\n` + `Exception origin: ${origin}\n`);
});

setTimeout(() => {
  console.log(
    'uncaughtExceptionMonitorはプロセスがきちんと終了するためこのログは出力されない',
  );
}, 500);

// 存在しない関数を呼び出して例外を発生させる
// @ts-expect-error
nonexistentFunc();
