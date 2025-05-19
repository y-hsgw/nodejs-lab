const event = new EventTarget();

const listener = (e: Event) => {
  console.log(e.currentTarget);
};

event.addEventListener('hoge', listener);
event.dispatchEvent(new Event('hoge'));
event.removeEventListener('hoge', listener);
