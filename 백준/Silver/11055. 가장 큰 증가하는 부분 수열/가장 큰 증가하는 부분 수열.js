const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const arr = input[1].split(' ').map(Number);

const dp = [...arr];

for (let i = 1; i < n; i += 1) {
  for (let j = i - 1; j >= 0; j -= 1) {
    if (arr[i] > arr[j]) {
      dp[i] = Math.max(dp[i], arr[i] + dp[j]);
    }
  }
}

console.log(Math.max(...dp));
