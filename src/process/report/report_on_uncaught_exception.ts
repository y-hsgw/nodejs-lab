import { report } from 'node:process';

report.reportOnUncaughtException = true;
report.directory = import.meta.dirname;

console.log(`Report on exception: ${report.reportOnUncaughtException}`);

throw new Error('This is an uncaught exception to trigger the report.');
