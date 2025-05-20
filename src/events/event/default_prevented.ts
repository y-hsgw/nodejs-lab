const event1 = new Event('hoge', {
  cancelable: true,
});
event1.preventDefault();
console.log(event1.defaultPrevented);

const event2 = new Event('hoge', {
  cancelable: false,
});
event2.preventDefault();
console.log(event2.defaultPrevented);
