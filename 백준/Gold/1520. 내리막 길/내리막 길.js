const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

const [m, n] = input[0].split(" ").map(Number)
const graph = input.slice(1).map((row) => row.split(" ").map(Number))


const dp = Array.from({ length: m }, () => Array.from({ length: n }, () => -1))
const offset = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
]
dp[m - 1][n - 1] = 1

const dfs = (x, y) => {
  if (dp[x][y] !== -1) {
    return dp[x][y]
  }
  let count = 0

  for (let i = 0; i < 4; i++) {
    const nx = x + offset[i][0]
    const ny = y + offset[i][1]
    if (nx >= 0 && nx < m && ny >= 0 && ny < n && graph[x][y] > graph[nx][ny]) {
      count += dfs(nx, ny)
    }
  }

  dp[x][y] = count
  return count
}

console.log(dfs(0, 0))