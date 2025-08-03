import { Buffer } from 'node:buffer';

{
  const buffer = Buffer.alloc(256);
  console.log(buffer);
  const length = buffer.write('\u00bd + \u00bc = \u00be', 0);
  console.log(buffer);

  console.log(`${length} bytes: ${buffer.toString('utf8', 0, length)}`);
  // Prints: 12 bytes: ½ + ¼ = ¾
}

{
  const buffer = Buffer.alloc(10);
  console.log(buffer);
  const length = buffer.write('abcd', 8);
  console.log(buffer);

  console.log(`${length} bytes: ${buffer.toString('utf8', 8, 10)}`);
  // Prints: 2 bytes : ab
}

{
  const buffer = Buffer.alloc(10);
  console.log(buffer);
  const length = buffer.write('abcd', 2, 3);
  console.log(buffer);

  console.log(`${length} bytes: ${buffer.toString('utf8')}`);
  // Prints: 3 bytes : ab
}
