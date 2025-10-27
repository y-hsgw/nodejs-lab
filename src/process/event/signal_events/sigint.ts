import process from 'node:process';

// プロセスが終了しないよう、標準入力からの読み取りを開始します。
process.stdin.resume();

process.on('SIGINT', (signal) => {
  console.log('-----');
  console.log(signal);
  console.log('Received SIGINT. Press Control-D to exit.');

  process.exit(0);
});
