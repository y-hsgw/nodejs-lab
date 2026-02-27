import { TransformStream } from 'node:stream/web';

const transform = new TransformStream({
  transform(chunk) {
    console.log(`[transform] transform: ${chunk}`);
  },
});

console.log(transform.readable);
