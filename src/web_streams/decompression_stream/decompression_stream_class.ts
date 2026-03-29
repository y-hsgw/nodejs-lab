import { DecompressionStream } from 'node:stream/web';

// DecompressionStream は CompressionStream の逆で、
// 「圧縮されたバイト列のストリーム」を「展開されたバイト列のストリーム」に変換するTransformStream。
//   ReadableStream<Uint8Array> --[DecompressionStream]--> ReadableStream<Uint8Array>
//     (gzip/deflate/brotli 等)
console.log(new DecompressionStream('gzip'));
