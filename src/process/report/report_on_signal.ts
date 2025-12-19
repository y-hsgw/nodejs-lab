import { execSync } from 'node:child_process';
import { pid, report } from 'node:process';

process.report.reportOnSignal = true;
report.signal = 'SIGUSR2';
report.directory = import.meta.dirname;
console.log(`Report on signal: ${report.reportOnSignal}`);
console.log(pid);

execSync(`kill -USR2 ${pid}`);
