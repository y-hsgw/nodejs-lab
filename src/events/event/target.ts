const eventTarget = new EventTarget();

eventTarget.addEventListener('hoge', (event) => {
  console.log(event.target);
});

eventTarget.dispatchEvent(new Event('hoge'));
