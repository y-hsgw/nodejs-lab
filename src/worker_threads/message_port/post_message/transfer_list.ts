import { MessageChannel } from 'node:worker_threads';

const { port1, port2 } = new MessageChannel();

port1.on('message', (message) => console.log(message));

const uint8Array = new Uint8Array([1, 2, 3, 4]);
// これは`uint8Array`のコピーを投稿します
port2.postMessage(uint8Array);
console.log('copied', uint8Array);
// これはデータをコピーするのではなく、`uint8Array`を使用不能にします
port2.postMessage(uint8Array, [uint8Array.buffer]);
console.log('transferred', uint8Array);
port2.close();
