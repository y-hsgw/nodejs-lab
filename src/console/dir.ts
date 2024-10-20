import console from 'node:console';

const object = {
  a: {
    b: {
      c: {
        d: {
          e: 1,
        },
      },
    },
  },
};

console.dir(object);

console.dir(object, { depth: null });

console.dir(object, { colors: false });

// 非列挙プロパティを追加
Object.defineProperty(object, 'hidden', {
  value: 'I am hidden',
  enumerable: false,
});

console.dir(object, { showHidden: true });
