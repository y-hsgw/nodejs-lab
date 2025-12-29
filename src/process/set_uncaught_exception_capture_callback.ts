import process from 'node:process';

process.setUncaughtExceptionCaptureCallback((err) =>
  console.log('err', err.message),
);

throw new Error('uncaught');
