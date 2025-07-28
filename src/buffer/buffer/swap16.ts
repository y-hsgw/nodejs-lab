import { Buffer } from 'node:buffer';

{
  const buf = Buffer.from('A', 'utf16le');
  console.log(buf); // <Buffer 41 00> UTF-16LE

  buf.swap16();
  console.log(buf); // <Buffer 00 41> UTF-16BE
}

{
  const buf1 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8]);

  console.log(buf1);
  // Prints: <Buffer 01 02 03 04 05 06 07 08>

  buf1.swap16();

  console.log(buf1);
  // Prints: <Buffer 02 01 04 03 06 05 08 07>

  const buf2 = Buffer.from([0x1, 0x2, 0x3]);

  buf2.swap16();
  // Throws ERR_INVALID_BUFFER_SIZE.
}
