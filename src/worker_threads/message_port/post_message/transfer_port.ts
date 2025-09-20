import { MessageChannel } from 'node:worker_threads';

const { port1, port2 } = new MessageChannel();
port1.on('message', (msg) => {
  console.log(msg);
  const receivedPort = msg.port;
  receivedPort.postMessage('Hello from port1 side!');
});

const otherChannel = new MessageChannel();
port2.postMessage({ port: otherChannel.port1 }, [otherChannel.port1]);

otherChannel.port2.on('message', (msg) => {
  console.log('📩 otherChannel.port2 got:', msg);
  otherChannel.port2.close();
});

otherChannel.port1.postMessage('これは移譲しているので、送信されない');

port2.close();
