import http, { type RequestOptions } from 'node:http';
import net from 'node:net';

class CustomAgentSync extends http.Agent {
  createConnection(options: RequestOptions): net.Socket {
    // 通常の net.createConnection と同じように同期でソケットを返す
    // ClientRequestArgs の port は string | number なので number に正規化する
    const socket = net.createConnection({
      host: options.host ?? undefined,
      port: Number(options.port),
      localAddress: options.localAddress,
      family: options.family,
    });
    socket.on('connect', () => {
      console.log('接続先:', socket.remoteAddress, socket.remotePort);
      console.log('送信元:', socket.localAddress, socket.localPort);
    });
    // 同期パターンでは return でソケットを返せばよい
    return socket;
  }
}

const agent = new CustomAgentSync({ keepAlive: true });

const req = http.request(
  {
    host: 'example.com',
    port: 80,
    path: '/',
    method: 'GET',
    agent,
  },
  (res) => {
    console.log('STATUS:', res.statusCode);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log('BODY CHUNK:', chunk.slice(0, 80));
    });
    res.on('end', () => {
      console.log('END');
    });
  },
);

req.on('error', (err) => {
  console.error('REQUEST ERROR:', err);
});

req.end();
