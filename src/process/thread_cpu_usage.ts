import { threadCpuUsage } from 'node:process';

const startUsage = threadCpuUsage();
console.log(startUsage);

// CPUを500ミリ秒間回転させる
const now = Date.now();
while (Date.now() - now < 500);

console.log(threadCpuUsage(startUsage));
console.log(threadCpuUsage());
