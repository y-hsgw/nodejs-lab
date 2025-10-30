import process from 'node:process';

// プロセスが終了しないよう、標準入力からの読み取りを開始します。
process.stdin.resume();

// 当ファイルを実行しているターミナルのウィンドウサイズを変更すると発火する
process.on('SIGWINCH', (signal) => {
  console.log('-----');
  console.log(signal);
  console.log('Received SIGWINCH: window size change');
});
