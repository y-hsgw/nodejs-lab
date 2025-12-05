import path from 'node:path';
import { loadEnvFile } from 'node:process';

const filePath = path.join(import.meta.dirname, './.env.test');
loadEnvFile(filePath);

console.log(process.env.HOGE);
