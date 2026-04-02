import { report } from 'node:process';

report.excludeEnv = true;
report.directory = import.meta.dirname;

report.writeReport();
console.log(report.excludeEnv);
