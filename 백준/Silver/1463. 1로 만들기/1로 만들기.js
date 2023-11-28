const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0]);
const MAX = Number.MAX_SAFE_INTEGER;
const dp = Array.from({ length: n + 1 }, () => MAX);
dp[n] = 0;

while (n > 1) {
  if (n % 3 === 0) {
    dp[n / 3] = Math.min(dp[n] + 1, dp[n / 3]);
  }
  if (n % 2 === 0) {
    dp[n / 2] = Math.min(dp[n] + 1, dp[n / 2]);
  }
  dp[n - 1] = Math.min(dp[n] + 1, dp[n - 1]);
  n -= 1;
}

console.log(dp[1]);
