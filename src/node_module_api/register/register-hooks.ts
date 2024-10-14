import { register } from 'node:module';

register('./hooks.js', import.meta.url);

// ビルド後、下記を実行すると検証可能。
// --importフラグを使うことでapp.jsの前にregister-hooks.jsを実行することができる。
// node --import ./dist/node_module_api/register/register-hooks.js ./dist/node_module_api/register/app.js

// 下記コメントアウトを外すとnode ./dist/node_module_api/register/register-hooks.js だけでも検証可能。
// await import('./app.js');
