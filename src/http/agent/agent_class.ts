import { Agent, createServer, request } from 'node:http';

// keep-alive を尊重するローカルサーバーを立てる（外部要因を排除して再利用を確認するため）
const server = createServer((_req, res) => {
  res.end('ok');
});

await new Promise<void>((resolve) => server.listen(0, resolve));
const { port } = server.address() as { port: number };
console.log(`server listening on port ${port}`);

{
  const keepAliveAgent = new Agent({ keepAlive: true });

  function get(i: number): Promise<void> {
    return new Promise((resolve, reject) => {
      const req = request(
        { protocol: 'http:', host: '127.0.0.1', port, agent: keepAliveAgent },
        (res) => {
          // localPort（自分側のポート）が毎回同じなら、同じソケットを再利用している
          console.log(
            `#${i} Status: ${res.statusCode} / localPort: ${res.socket.localPort}`,
          );
          res.resume();
          res.on('end', resolve);
        },
      );
      req.on('error', reject);
      req.end();
    });
  }

  for (let i = 0; i < 4; i++) {
    await get(i); // 逐次：前のソケットがプールに戻ってから再利用される
  }

  keepAliveAgent.destroy(); // プールを閉じる
}

{
  const keepAliveAgent = new Agent({ keepAlive: false });

  function get(i: number): Promise<void> {
    return new Promise((resolve, reject) => {
      const req = request(
        { protocol: 'http:', host: '127.0.0.1', port, agent: keepAliveAgent },
        (res) => {
          console.log(
            `#${i} Status: ${res.statusCode} / localPort: ${res.socket.localPort}`,
          );
          res.resume();
          res.on('end', resolve);
        },
      );
      req.on('error', reject);
      req.end();
    });
  }

  for (let i = 0; i < 4; i++) {
    await get(i); // 逐次：前のソケットがプールに戻ってから再利用される
  }

  keepAliveAgent.destroy(); // プールを閉じる
}

server.close(); // サーバーを閉じてプロセスを終了させる
