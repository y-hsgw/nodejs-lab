import vm from 'node:vm';

try {
  vm.runInThisContext('binary ! isNotOk');
} catch (err) {
  // 'err' will be a SyntaxError.
  console.error(err);
}
