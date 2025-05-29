const customEvent = new CustomEvent('hoge', { detail: { foo: 'bar' } });
console.log(customEvent.detail);
