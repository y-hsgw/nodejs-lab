import { findSourceMap } from 'node:module';
import path from 'node:path';

const filePath = path.resolve(import.meta.dirname, './find_source_map.js');
console.log(filePath);

const sourceMap = findSourceMap(filePath);
console.log(sourceMap?.payload);

// node --enable-source-maps  dist/node_module_api/source_map/find_source_map.js
// 上記実行でSourceMapの取得可能
