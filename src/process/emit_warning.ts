import process from 'node:process';

process.emitWarning('Something happened!', {
  code: 'MY_WARNING',
  detail: 'This is some additional information',
});
// Emits:
// (node:xxxxx) [MY_WARNING] Warning: Something happened!
// This is some additional information

process.on('warning', (warning) => {
  console.log('-----warning event-----');
  console.warn(warning.name); // 'Warning'
  console.warn(warning.message); // 'Something happened!'
  // @ts-expect-error
  console.warn(warning.code); // 'MY_WARNING'
  console.warn(warning.stack); // Stack trace
  // @ts-expect-error
  console.warn(warning.detail); // 'This is some additional information'
});
