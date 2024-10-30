const hoge = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
};

console.time('bunch-of-stuff');
await hoge();
console.timeLog('bunch-of-stuff', '経過');
await hoge();
console.timeEnd('bunch-of-stuff');
