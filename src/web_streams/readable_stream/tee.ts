import { ReadableStream } from 'node:stream/web';

const readableStream = new ReadableStream<string>({
  start(controller) {
    controller.enqueue('a');
    controller.enqueue('b');
    controller.close();
  },
});

const [rs1, rs2] = readableStream.tee();

for await (const x of rs1) {
  console.log('left:', x);
}

for await (const x of rs2) {
  console.log('right:', x);
}
