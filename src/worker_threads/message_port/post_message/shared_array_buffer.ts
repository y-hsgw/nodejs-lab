import { MessageChannel } from 'node:worker_threads';

const { port1, port2 } = new MessageChannel();
port1.on('message', (msg) => {
  console.log('📩 受信:', msg);

  msg[0] = 42;
  console.log('📩 受信側で変更後:', msg);
});

// `sharedUint8Array`のメモリは、元の配列と`.on("message")`で受信したコピーの両方からアクセス可能です
const sharedUint8Array = new Uint8Array(new SharedArrayBuffer(4));
sharedUint8Array[0] = 1;
console.log('🚀 送信前:', sharedUint8Array);

port2.postMessage(sharedUint8Array);
setTimeout(() => {
  console.log('🚀 送信側で確認:', sharedUint8Array);
}, 100);
port2.close();
