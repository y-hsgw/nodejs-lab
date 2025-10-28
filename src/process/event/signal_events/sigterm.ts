import process from 'node:process';

// プロセスが終了しないよう、標準入力からの読み取りを開始します。
process.stdin.resume();

console.log(`This process is pid ${process.pid}`);

// 前述でログに表示された PID に向けて kill コマンドを実行すると SIGTERM イベントが発火する
process.on('SIGTERM', (signal) => {
  console.log('-----');
  console.log(signal);
  console.log('Received SIGTERM. Press Control-D to exit.');

  process.exit(0);
});
