console.log(Error.stackTraceLimit);
console.log(new Error('hoge').stack);
Error.stackTraceLimit = 1;
console.log(Error.stackTraceLimit);
console.log(new Error('hoge').stack);
