const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
const street = input
  .slice(1, 1 + n)
  .map((colors) => colors.split(' ').map(Number));
const dp = Array.from({ length: n }, () => Array.from({ length: 3 }, () => 0));

for (let i = 0; i < 3; i++) {
  dp[0][i] = street[0][i];
}

for (let i = 1; i < n; i++) {
  for (let j = 0; j < 3; j++) {
    dp[i][j] = street[i][j] + Math.min(dp[i-1][(j + 1) % 3], dp[i-1][(j + 2) % 3]);
  }
}

console.log(Math.min(...dp[n-1]))
