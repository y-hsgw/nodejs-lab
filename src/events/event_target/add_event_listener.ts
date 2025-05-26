const eventTarget = new EventTarget();

eventTarget.addEventListener('hoge', (event) => {
  console.log(event.target);
  console.log(event.type);
});

eventTarget.dispatchEvent(new Event('hoge'));

eventTarget.addEventListener(
  'once',
  (event) => {
    console.log(event.target);
    console.log(event.type);
  },
  { once: true },
);

eventTarget.dispatchEvent(new Event('once'));
eventTarget.dispatchEvent(new Event('once')); // 呼ばれない

const callback = () => {
  console.log('capture phase');
};

eventTarget.addEventListener('capture', callback, { capture: true });
eventTarget.addEventListener('capture', callback, { capture: false });

eventTarget.dispatchEvent(new Event('capture')); // captureが別リスナーになるため2回呼ばれる
