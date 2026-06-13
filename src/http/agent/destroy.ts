import http from 'node:http';

// agent.destroy() は、その Agent が抱えているソケットをすべて破棄するメソッド。
// 「使用中（in use）のソケット」だけでなく、keepAlive で freeSockets プールに
// 保持されているアイドルソケットも閉じられる。
//
// 注意: destroy() 後の Agent は再利用しないこと。再びリクエストするなら
// 新しい Agent を作り直す。
//
//   keepAlive: true            destroy()
//   └ 完了後もソケットをプール  └ 使用中 + プール内のソケットを全破棄
//      （= 放置すると残り続ける）   （= プロセスが終了できるようになる）

// keepAlive: true なのでリクエスト完了後もソケットがプールに残る。
// この「残ったソケット」を destroy() が片付けることを確認する。
const agent = new http.Agent({ keepAlive: true, maxSockets: 1 });

function doRequest(label: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const req = http.request(
      { host: 'example.com', port: 80, path: '/', method: 'GET', agent },
      (res) => {
        console.log(`[${label}] STATUS:`, res.statusCode);
        // レスポンスを消費しきるとソケットが解放され、keepAlive により
        // freeSockets プールに保持される（破棄はされない）
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

// freeSockets の状態をホストごとに集計するヘルパー。
// agent.freeSockets は { 'host:port:...': Socket[] } という形。
// プールに「並んでいる本数」と、そのうち「実際に破棄済み(destroyed)の本数」を返す。
function inspectFreeSockets(): { listed: number; destroyed: number } {
  const all = Object.values(agent.freeSockets).flatMap((s) => s ?? []);
  return {
    listed: all.length,
    destroyed: all.filter((s) => s.destroyed).length,
  };
}

await doRequest('1回目');

// リクエスト完了直後: keepAlive によりソケットがプールに残っているはず
console.log('--- destroy() 前 ---');
console.log('  プール:', inspectFreeSockets()); // → { listed: 1, destroyed: 0 }

// プール内のソケットを破棄する。これを呼ばないと、ソケットは
// サーバがタイムアウトで閉じるまでオープンのまま残り続ける。
agent.destroy();

// 注意: destroy() はソケットを破棄(socket.destroyed = true)するが、
// freeSockets 配列からの参照除去は同期的とは限らない。本数(listed)では
// なく destroyed フラグを見ることで「実際に閉じられた」ことを確認できる。
console.log('--- destroy() 後 ---');
console.log('  プール:', inspectFreeSockets()); // → { listed: 1, destroyed: 1 }
console.log('agent.destroy() 完了');

// このあと agent で再リクエストはしない（破棄済み Agent は再利用しない）。
// プールが空になったので、保留中の処理がなければプロセスは自然に終了できる。
