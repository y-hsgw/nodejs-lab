import { report } from 'node:process';

const data = report.getReport();
console.log(data);
// @ts-expect-error
console.log(data.header.nodejsVersion);
