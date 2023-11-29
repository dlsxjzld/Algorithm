const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 1. 포도주 잔을 선택하면 그 잔에 들어있는 포도주는 모두 마셔야 하고,
//    마신 후에는 원래 위치에 다시 놓아야 한다.
// 2. 연속으로 놓여 있는 3잔을 모두 마실 수는 없다.

const n = Number(input[0]);
const wine = [0, ...input.slice(1, n + 1).map(Number)];
const dp = Array.from({ length: n + 1 }, () => 0);

// dp[idx] => idx잔 까지의 최댓값
dp[1] = wine[1];
if (n >= 2) {
  dp[2] = wine[2] + wine[1];
}
if (n >= 3) {
  for (let idx = 3; idx < n + 1; idx++) {
    dp[idx] = Math.max(
      wine[idx] + wine[idx - 1] + dp[idx - 3],
      wine[idx] + dp[idx - 2],
      dp[idx - 1]
    );
  }
}



console.log(Math.max(...dp));
