import http from 'node:http';
import type stream from 'node:stream';

// agent.reuseSocket(socket, request) は、keepAlive で freeSockets プールに
// 保持されていたソケットが、新しいリクエストに再アタッチされるときに
// Agent が呼び出すメソッド。keepSocketAlive() の対になる処理。
//
// 既定実装は socket.ref() のみ。プールに入る際 keepSocketAlive() で
// socket.unref() されているため（アイドル中のソケットがプロセスを
// 生かし続けないようにするため）、再利用時に ref() し直して
// プロセスのカウント対象に戻す。
//
//   keepSocketAlive(socket)         reuseSocket(socket, request)
//   ├ setKeepAlive(true, msecs)     └ socket.ref()
//   └ socket.unref()                   （= unref を打ち消す）
class CustomAgent extends http.Agent {
  reuseSocket(socket: stream.Duplex, request: http.ClientRequest): void {
    super.reuseSocket(socket, request);

    const s = socket as import('node:net').Socket;
    console.log('reuseSocket 呼び出し');
    console.log('  remote:', s.remoteAddress, s.remotePort);
    console.log('  path  :', request.path);
    console.log('  プールのソケットを新しいリクエストに再利用する');
  }
}

// keepAlive: true でないとソケットはプールされず、再利用も起きないため
// reuseSocket は呼ばれない。maxSockets: 1 で同一ソケットの再利用を強制する。
const agent = new CustomAgent({ keepAlive: true, maxSockets: 1 });

function doRequest(label: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const req = http.request(
      { host: 'example.com', port: 80, path: '/', method: 'GET', agent },
      (res) => {
        console.log(`[${label}] STATUS:`, res.statusCode);
        // レスポンスを最後まで消費するとソケットが解放され、
        // keepSocketAlive が呼ばれてプールに保持される
        res.resume();
        res.on('end', () => {
          console.log(`[${label}] END`);
          resolve();
        });
      },
    );
    req.on('error', reject);
    req.end();
  });
}

// 1 回目: 新規ソケットを作成（プールが空なので reuseSocket は呼ばれない）
// 2 回目: 1 回目のソケットがプールから再利用され reuseSocket が呼ばれる

await doRequest('1回目');
await doRequest('2回目');
// 明示的に閉じないとプールされたソケットがプロセスを生かし続ける
agent.destroy();
console.log('agent.destroy() 完了');
