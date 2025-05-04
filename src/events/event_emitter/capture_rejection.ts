import { captureRejectionSymbol, EventEmitter } from 'node:events';
import http from 'node:http';

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('OK');
});

server.listen(3000, () => {
  console.log('🚀 サーバー起動中：http://localhost:3000');
});

class CustomEventEmitter extends EventEmitter {
  constructor() {
    super({ captureRejections: true });
  }

  [captureRejectionSymbol](
    err: Error,
    event: string | symbol,
    ...args: any[]
  ): void {
    console.log('rejection happened for', event, 'with', err, ...args);
    this.destroy(err);
  }

  destroy(err: Error) {
    console.error('リソースを破棄します:', err);
  }
}

const emitter = new CustomEventEmitter();

emitter.on('data', async () => {
  throw new Error('⚠️ エラーが発生しました');
});

// captureRejectionsが有効なので、エラーキャッチできる。そのため、サーバーが落ちない。
emitter.emit('data');
