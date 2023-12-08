const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const n = Number(input[0]);
const A = input[1].split(' ').map(Number);
const dp = Array.from({ length: n }, () => 1);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (A[i] > A[j]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

console.log(Math.max(...dp));
