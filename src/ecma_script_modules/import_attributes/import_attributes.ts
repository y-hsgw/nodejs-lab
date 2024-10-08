import fooData from './foo.json' with { type: 'json' };

console.log(fooData);

const { default: barData } = await import('./bar.json', {
  with: { type: 'json' },
});
console.log(barData);
