import { report } from 'node:process';

{
  report.writeReport();
  console.log(`Report on fatal error: ${report.reportOnFatalError}`);
}
