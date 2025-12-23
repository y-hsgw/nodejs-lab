import { report } from 'node:process';

{
  console.log(`Report signal: ${report.signal}`);
}

{
  report.signal = 'SIGUSR1';
  console.log(`Report signal: ${report.signal}`);
}
