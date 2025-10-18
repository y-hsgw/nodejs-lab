import process from 'node:process';

// リスナー関数は同期操作のみを実行する必要がある。
// Node.jsプロセスは'exit'イベントリスナーを呼び出した直後に終了するため、イベントループにキューイングされた追加の処理はすべて破棄される。
// 例えば以下の例では、タイムアウトは発生しない。
process.on('exit', (code) => {
  setTimeout(() => {
    console.log('This will not run', code);
  }, 1000);
});

process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
});
