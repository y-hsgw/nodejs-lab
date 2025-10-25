import process from 'node:process';

process.on('warning', (warning) => {
  console.warn(warning.name); // Print the warning name
  console.warn(warning.message); // Print the warning message
  console.warn(warning.stack); // Print the stack trace
});

process.emitWarning('これは警告メッセージです');
