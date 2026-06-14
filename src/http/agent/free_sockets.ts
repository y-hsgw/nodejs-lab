import http from 'node:http';

// agent.freeSockets は、keepAlive により「待機状態（idle）」として
// プールに保持されているソケットの一覧を表す読み取り専用オブジェクト。
//
//   { 'host:port:': [socket, socket, ...] }
//
// のように、接続先（getName() が返すキー）ごとにソケット配列を持つ。
//
//   sockets      : 現在リクエスト処理中（使用中）のソケット
//   freeSockets  : リクエストが完了し再利用待ちでプールにあるソケット
//
// レスポンスを最後まで消費するとソケットは sockets から freeSockets へ移り、
// 次のリクエストで freeSockets から取り出されて再び sockets へ戻る。
// keepAlive: false の場合はプールされないため freeSockets は常に空。
const agent = new http.Agent({ keepAlive: true, maxSockets: 1 });

// ヘルパー: freeSockets を生のまま & キー => ソケット数 の両方で表示する
function dumpFreeSockets(label: string): void {
  console.log(`[${label}] freeSockets (生):`, agent.freeSockets);
  const entries = Object.entries(agent.freeSockets).map(
    ([key, socks]) => `${key} => ${socks?.length ?? 0}`,
  );
  console.log(`[${label}] freeSockets (要約):`, entries.length ? entries : '(空)');
}

function doRequest(label: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const req = http.request(
      { host: 'example.com', port: 80, path: '/', method: 'GET', agent },
      (res) => {
        console.log(`[${label}] STATUS:`, res.statusCode);
        // ヘッダ受信時点ではソケットは使用中なので freeSockets は空
        dumpFreeSockets(`${label} ヘッダ受信時`);
        res.resume();
        res.on('end', () => {
          console.log(`[${label}] END`);
          // end 直後はまだ解放処理が走っていないことがあるため、
          // 次のイベントループに回してからプールの状態を確認する
          setImmediate(() => {
            dumpFreeSockets(`${label} 完了後`);
            resolve();
          });
        });
      },
    );
    req.on('error', reject);
    req.end();
  });
}

// 初期状態: まだ何も接続していないので freeSockets は空
dumpFreeSockets('開始時');

// 1 回目: 新規ソケットを作成。完了後にプールへ入り freeSockets に 1 本現れる
await doRequest('1回目');

// 2 回目: freeSockets のソケットが再利用される。
//   - 処理中は再び sockets 側に移るため freeSockets は空
//   - 完了後にまたプールへ戻る
await doRequest('2回目');

// 明示的に閉じるとプールが破棄され freeSockets も空になる
agent.destroy();
dumpFreeSockets('destroy() 後');
console.log('agent.destroy() 完了');
