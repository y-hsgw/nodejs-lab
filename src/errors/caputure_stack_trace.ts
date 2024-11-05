const myObject = {};
Error.captureStackTrace(myObject);
// @ts-expect-error
console.log(myObject.stack);
