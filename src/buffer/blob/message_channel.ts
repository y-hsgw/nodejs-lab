import { Blob } from 'node:buffer';
import { setTimeout as delay } from 'node:timers/promises';

const blob = new Blob(['hello there']);

const messageChannel1 = new MessageChannel();
const messageChannel2 = new MessageChannel();

messageChannel1.port1.onmessage = async ({ data }) => {
  console.log(await data.arrayBuffer());
  messageChannel1.port1.close();
};

messageChannel2.port1.onmessage = async ({ data }) => {
  await delay(1000);
  console.log(await data.arrayBuffer());
  messageChannel2.port1.close();
};

messageChannel1.port2.postMessage(blob);
messageChannel2.port2.postMessage(blob);

console.log(await blob.text());
