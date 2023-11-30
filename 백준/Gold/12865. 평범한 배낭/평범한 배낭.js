const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input[0].split(" ").map(Number);

const arr = [
  0,
  ...input.slice(1, 1 + n).map((row) => row.split(" ").map(Number)),
];

// dp[i][j] = i번째 물건을 넣었을 때, 
// j만큼의 무게까지 들어갈 수 있는 물건들이 갖는 가치의 최댓값
const dp = Array.from({ length: n + 1 }, () =>
  Array.from({ length: k + 1 }, () => 0)
);

for (let i = 1; i < n + 1; i++) {
  const [w, v] = arr[i];

  for (let j = 1; j < k + 1; j++) {
    if (j >= w) {
      dp[i][j] = Math.max(v + dp[i - 1][j - w], dp[i - 1][j]);
    } else {
      dp[i][j] = dp[i - 1][j];
    }
  }

}


console.log(Math.max(...dp[n]));
