import events, { EventEmitter } from 'node:events';
import http from 'node:http';

events.captureRejections = true;

console.log(events.captureRejections);

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('OK');
});

server.listen(3000, () => {
  console.log('🚀 サーバー起動中：http://localhost:3000');
});

const emitter = new EventEmitter();

emitter.on('data', async () => {
  throw new Error('⚠️ エラーが発生しました');
});

// captureRejectionsが有効なので、errorイベントハンドラでエラーをキャッチできる。そのため、サーバーが落ちない。
emitter.emit('data');
emitter.on('error', console.log);
