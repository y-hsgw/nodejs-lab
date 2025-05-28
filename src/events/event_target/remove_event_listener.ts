const eventTarget = new EventTarget();

const callback = (event: Event) => {
  console.log(event.type);
};

eventTarget.addEventListener('hoge', callback);
eventTarget.dispatchEvent(new Event('hoge'));
eventTarget.removeEventListener('hoge', callback);

eventTarget.dispatchEvent(new Event('hoge'));
