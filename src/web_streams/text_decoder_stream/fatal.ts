import { TextDecoderStream } from 'node:stream/web';

{
  // fatal: true のときに不正なバイト列を流すとエラーになる
  const stream = new TextDecoderStream('utf-8', { fatal: true });
  console.log(stream.fatal);

  const writer = stream.writable.getWriter();
  const reader = stream.readable.getReader();

  // 0xFF は UTF-8 として不正なバイト
  writer
    .write(new Uint8Array([0xff]))
    .catch((err) => console.error('[TRUE] write error:', err));
  reader.read().catch((err) => console.error('[TRUE] read error:', err));
}

{
  // fatal: false のときに不正なバイト列を流してもエラーにならない
  const stream = new TextDecoderStream('utf-8', { fatal: false });
  console.log(stream.fatal);

  const writer = stream.writable.getWriter();
  const reader = stream.readable.getReader();

  // 0xFF は UTF-8 として不正なバイト
  writer
    .write(new Uint8Array([0xff]))
    .catch((err) => console.error('[FALSE] write error:', err));
  reader.read().catch((err) => console.error('[FALSE] read error:', err));
}
