import process from 'node:process';
import { spawn } from 'node:child_process';

console.log(process.argv.includes('--child'));

if (process.argv.includes('--child')) {
  // 子プロセス: IPCがあれば送信、なければ無視
  process.send?.('message');
  process.on('disconnect', () => process.exit(0));
} else {
  // 親プロセス: 同ファイルを --child 付きで起動（IPCを有効化）
  const child = spawn(process.execPath, [import.meta.filename, '--child'], {
    stdio: ['ignore', 'pipe', 'ignore', 'ipc'],
  });

  child.on('message', (msg) => {
    console.log('received:', msg); // => received: message
    child.disconnect(); // 終了
  });

  child.stdout?.on('data', (data) => {
    process.stdout?.write(`[child stdout] ${data}`);
  });
}
