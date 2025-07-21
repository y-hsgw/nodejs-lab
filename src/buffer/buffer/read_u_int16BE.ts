import { Buffer } from 'node:buffer';

{
  const buf = Buffer.from([0x12, 0x34, 0x56]);

  console.log(buf.readUInt16BE().toString(16));
  // Prints: 1234
  console.log(buf.readUInt16BE(1).toString(16));
  // Prints: 3456
}

{
  const buf = Buffer.from([0, -1]);

  console.log(buf.readUInt16BE());
}
