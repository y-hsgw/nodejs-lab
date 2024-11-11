import * as http from 'http';

const PORT = 3000;

// 1. 最初のサーバーを起動
const server1 = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from server1\n');
});

server1.listen(PORT, () => {
  console.log(`Server1 is listening on port ${PORT}`);
});

// 2. 2つ目のサーバーを同じポートで起動し、EADDRINUSEエラーを発生させる
const server2 = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from server2\n');
});

server2.on('error', (error) => {
  console.error(error);
});

server2.listen(PORT);
