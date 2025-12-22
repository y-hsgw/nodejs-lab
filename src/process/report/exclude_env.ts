import { report } from 'node:process';

// @ts-expect-error
report.excludeEnv = true;
report.directory = import.meta.dirname;

report.writeReport();
// @ts-expect-error
console.log(report.excludeEnv);
