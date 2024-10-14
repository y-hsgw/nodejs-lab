export function resolve(
  specifier: string,
  context: { parentURL: string },
  nextResolve: Function,
) {
  console.log('specifier', specifier);
  if (specifier === 'my-module') {
    // 特定のモジュールを解決するカスタムロジック
    return {
      url: new URL('./custom-module.js', context.parentURL).href,
      shortCircuit: true,
    };
  }
  // それ以外は通常の解決ロジックに委ねる
  return nextResolve(specifier, context);
}
