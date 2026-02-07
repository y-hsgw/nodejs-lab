import { ReadableStream } from 'node:stream/web';

const stream = new ReadableStream({
  type: 'bytes',
  pull(controller) {
    const req = controller.byobRequest;
    console.log(req);
    if (!req) return;

    const v = req.view!;

    const u8 = new Uint8Array(v.buffer, v.byteOffset, v.byteLength);
    u8[0] = 0x41; // 'A'
    u8[1] = 0x42; // 'B'
    req.respondWithNewView(u8);
    controller.close();
  },
});

const reader = stream.getReader({ mode: 'byob' });

const buf = new Uint8Array(10);

const { value, done } = await reader.read(buf);
console.log(done); // false
console.log(Array.from(value!));
// [
//   65, 66, 0, 0, 0,
//    0,  0, 0, 0, 0
// ]
