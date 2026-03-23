import { TextDecoderStream } from 'node:stream/web';

// UTF-8 BOM (EF BB BF) + "hi"
const withBOM = new Uint8Array([0xef, 0xbb, 0xbf, 0x68, 0x69]);

async function decode(ignoreBOM: boolean) {
  const stream = new TextDecoderStream('utf-8', { ignoreBOM });
  const writer = stream.writable.getWriter();
  const reader = stream.readable.getReader();

  writer.write(withBOM);
  writer.close();

  const { value } = await reader.read();
  console.log({ ignoreBOM, value, length: value?.length });
}

await decode(false); // BOM除去 → "hi" (length: 2)
await decode(true); // BOM保持 → "\uFEFFhi" (length: 3)
