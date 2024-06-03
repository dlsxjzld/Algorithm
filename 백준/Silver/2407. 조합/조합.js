const fs = require('fs');

let [n, m] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

m = n / 2 - m > 0 ? m : n - m;

let a = 1n;
let b = 1n;

for (let i = 0; i < m; i++) {
  a *= BigInt(n - i);
  b *= BigInt(1 + i);
}

console.log((a / b).toString());