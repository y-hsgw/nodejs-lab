import http from 'node:http';
import type stream from 'node:stream';

// agent.keepSocketAlive(socket) は、リクエストからソケットが切り離され
// keepAlive で再利用候補になったときに Agent が呼び出すメソッド。
// 既定実装は socket.setKeepAlive() などを行いソケットを再利用可能にする。
class CustomAgent extends http.Agent {
  keepSocketAlive(socket: stream.Duplex): void {
    super.keepSocketAlive(socket);

    const s = socket as import('node:net').Socket;
    console.log('keepSocketAlive 呼び出し');
    console.log('  remote:', s.remoteAddress, s.remotePort);
    console.log('  ソケットを保持して再利用候補にする');
  }
}

// keepAlive: true でないとソケットはそもそもプールされず keepSocketAlive は呼ばれない
const agent = new CustomAgent({ keepAlive: true, maxSockets: 1 });

function doRequest(label: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const req = http.request(
      { host: 'example.com', port: 80, path: '/', method: 'GET', agent },
      (res) => {
        console.log(`[${label}] STATUS:`, res.statusCode);
        // レスポンスを最後まで消費すると、ソケットが解放され
        // keepSocketAlive が呼ばれて再利用候補になる
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

// 1 回目のリクエスト完了時に keepSocketAlive が呼ばれ、
// 2 回目のリクエストでそのソケットが再利用されることを確認する

await doRequest('1回目');
await doRequest('2回目');
// 明示的に閉じないとプールされたソケットがプロセスを生かし続ける
agent.destroy();
console.log('agent.destroy() 完了');
