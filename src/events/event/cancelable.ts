const event1 = new Event('hoge', {
  cancelable: false,
});

console.log(event1.cancelable);

const event2 = new Event('hoge', {
  cancelable: true,
});

console.log(event2.cancelable);
