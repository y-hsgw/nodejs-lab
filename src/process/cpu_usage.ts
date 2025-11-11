import { cpuUsage } from 'node:process';

const startUsage = cpuUsage();
console.log(startUsage);

// CPUを500ミリ秒間回転させる
const now = Date.now();
while (Date.now() - now < 500);

console.log(cpuUsage(startUsage));
console.log(cpuUsage());
