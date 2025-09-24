import { MessageChannel } from 'node:worker_threads';

const { port1 } = new MessageChannel();

port1.unref();
port1.ref();
port1.unref();
