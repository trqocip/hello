// 最小限のエラーハンドリング付き Express サーバー
const express = require('express');
const app = express();

// Render が指定する PORT を使用。ローカル用に 3000 を fallback として使用。
const port = process.env.PORT || 3000;

// ルートパス
app.get('/', (req, res) => {
  try {
    res.send('Hello from Render + Node.js for the first time!');
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('Internal Server Error');
  }
});

// 必ず 0.0.0.0 で listen（Render の仕様）[InlineCitation-2-Web Services – Render Docs](https://render.com/docs/web-services)
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
