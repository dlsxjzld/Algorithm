const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const N = Number(input[0])
const graph = input.slice(1).map((row) => row.split(" ").map(Number))
const dp = Array.from({ length: N }, () => Array.from({ length: N }, () => 0n))

const move = [
  [0, 1],
  [1, 0],
] // 동, 남

dp[0][0] = 1n
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if(i===N-1 && j===N-1) continue
    const canMove = graph[i][j]
    for (let k = 0; k < 2; k++) {
      const [nx, ny] = [i + move[k][0] * canMove, j + move[k][1] * canMove]
      if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue
      dp[nx][ny] += dp[i][j]
    }
  }
}
console.log(dp[N-1][N-1].toString())
