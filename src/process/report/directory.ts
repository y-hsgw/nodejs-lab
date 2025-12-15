import { report } from 'node:process';

report.directory = import.meta.dirname;

console.log(report.writeReport());
console.log(`Report directory is ${report.directory}`);
