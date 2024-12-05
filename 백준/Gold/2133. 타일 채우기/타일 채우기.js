const input = require("fs")
  .readFileSync("/dev/stdin", "utf-8")
  .trim()
  .split("\n");
let N = Number(input[0]);

let dp = [];
for (let i = 0; i <= 30; i++) {
  dp[i] = 0;
}
dp[0] = 1;
dp[2] = 3;


for (let i = 4; i <= N; i += 2) {
    dp[i] = dp[i-2] * dp[2];
  for (let j = i-4; j >=0; j -= 2) {
    dp[i] += dp[j]*2;
  }
}
console.log(dp[N]);