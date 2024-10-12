module.exports.hoge = true; // Exported from require of module
// exports は単なる変数であるため、新しいオブジェクトや値を exports に代入すると、
// それはもはや module.exports とはリンクしていない独立した値となる
exports = { hoge: false }; // Not exported, only available in the module

// 再度新しいオブジェクトや関数で置き換える場合、exports を再代入することが一般的
// module.exports = exports;
