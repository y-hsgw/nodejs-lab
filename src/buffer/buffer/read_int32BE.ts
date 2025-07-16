import { Buffer } from 'node:buffer';

{
  const buf = Buffer.from([0, 0, 0, 5]);

  console.log(buf.readInt32BE());
  // Prints: 5
}

{
  const buf = Buffer.from([5, 0, 0, 0]);

  console.log(buf.readInt32BE());
  // Prints: 83886080
}
