const eventTarget = new EventTarget();

eventTarget.addEventListener('hoge', (event) => {
  console.log(event.type);
  event.preventDefault();
});

console.log(eventTarget.dispatchEvent(new Event('hoge')));

console.log(eventTarget.dispatchEvent(new Event('hoge', { cancelable: true })));
