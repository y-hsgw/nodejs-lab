import url from 'node:url';

console.log(url.domainToASCII('español.com')); // Prints xn--espaol-zwa.com
console.log(url.domainToASCII('中文.com')); // Prints xn--fiq228c.com
// 無効なドメイン名の場合は空文字列を返す。
console.log(url.domainToASCII('xn--iñvalid.com')); // Prints an empty string

// フィッシング攻撃の検出でも使える。適切でない場合、 シリアライズを返す。
console.log(url.domainToASCII('аmazon.com')); // Prints xn--mazon-3ve.com
console.log(url.domainToASCII('amazon.com ')); //  Prints an empty string
