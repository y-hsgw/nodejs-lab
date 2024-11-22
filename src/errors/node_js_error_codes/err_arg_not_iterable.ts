const input = 123; // イテラブルではない値

// @ts-expect-error
for (const value of input) {
  console.log(value);
}
