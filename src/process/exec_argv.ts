import { execArgv } from 'node:process';

// node --max_old_space_size=16384 src/process/exec_argv.ts
// 上記を実行すると[ '--max_old_space_size=16384' ] が出力される
console.log(execArgv);
