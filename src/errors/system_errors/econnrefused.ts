import net from 'net';

const HOST = '127.0.0.1';
const PORT = 12345;

const client = net.createConnection(PORT, HOST, () => {
  console.log('サーバーに接続できました');
});

client.on('error', (error) => {
  console.log(error);
});
