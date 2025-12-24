import { report } from 'node:process';

report.directory = import.meta.dirname;
report.writeReport('hoge.json');
