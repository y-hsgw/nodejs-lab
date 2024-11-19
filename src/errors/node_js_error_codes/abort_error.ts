async function fetchWithAbort() {
  const controller = new AbortController();
  const { signal } = controller;

  // 5秒後にリクエストをキャンセルするタイマーを設定
  setTimeout(() => {
    console.log('リクエストをキャンセルします...');
    controller.abort();
  }, 1);

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      signal,
    });
    const data = await response.json();
    console.log('レスポンス:', data);
  } catch (error) {
    console.log(error);
  }
}

fetchWithAbort();
