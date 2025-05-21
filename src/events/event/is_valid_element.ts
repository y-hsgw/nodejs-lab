const controller = new AbortController();
const signal = controller.signal;

signal.addEventListener('abort', (event) => {
  console.log(event.isTrusted);
});

controller.abort();

const event = new EventTarget();
event.addEventListener('hoge', (event) => {
  console.log(event.isTrusted);
});

event.dispatchEvent(new Event('hoge'));
