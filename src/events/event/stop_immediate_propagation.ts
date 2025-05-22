const event = new EventTarget();

event.addEventListener('hoge', (e) => {
  console.log('listener 1: no stop');
  e.stopImmediatePropagation();
});

event.addEventListener('hoge', () => {
  // 最初のイベントリスナーでstopImmediatePropagationが呼ばれているため、このリスナーは呼ばれない
  console.log('listener 2: should be called');
});
event.dispatchEvent(new Event('hoge'));
