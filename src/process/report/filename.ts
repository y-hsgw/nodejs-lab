import { report } from 'node:process';

{
  report.writeReport();
  console.log(`Report filename is ${report.filename}`);
}

{
  report.filename = 'hoge.json';
  report.writeReport();
  console.log(`Report filename is ${report.filename}`);
}
