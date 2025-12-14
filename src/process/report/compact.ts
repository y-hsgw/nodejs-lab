import { report } from 'node:process';

console.log(`Reports are compact? ${report.compact}`);

{
  console.log(report.writeReport('non-compact.json'));
}

{
  report.compact = true;
  console.log(report.writeReport('compact.json'));
}
