import { availableMemory, constrainedMemory } from 'node:process';

// docker run --rm -m 256m -v "$PWD:/app" -w /app node:24 node src/process/constrained_memory.ts
console.log(constrainedMemory()); //  256×1024×1024 = 268435456  が出力される
console.log(availableMemory());
