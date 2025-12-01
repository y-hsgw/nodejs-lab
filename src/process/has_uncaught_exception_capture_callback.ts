import {
  hasUncaughtExceptionCaptureCallback,
  setUncaughtExceptionCaptureCallback,
} from 'node:process';

{
  setUncaughtExceptionCaptureCallback(() => {});

  console.log(hasUncaughtExceptionCaptureCallback());
}

{
  setUncaughtExceptionCaptureCallback(null);
  console.log(hasUncaughtExceptionCaptureCallback());
}
