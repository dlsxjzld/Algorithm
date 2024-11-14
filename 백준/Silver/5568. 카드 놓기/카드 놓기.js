const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

const n = Number(input[0])
const k = Number(input[1])
const cards = input.slice(2).map(Number)
const answer = new Set()
const visited = Array.from({ length: n }, () => false)

const dfs = (depth, num) => {
  if (depth === k) {
    answer.add(num.join(""))
    return
  }
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true
      num.push(cards[i])
      dfs(depth + 1, num)
      visited[i] = false
      num.pop()
    }
  }
}

dfs(0, [])
console.log(answer.size)
