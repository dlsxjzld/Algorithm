const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])

const secondLine = [0].concat(input.slice(1).map(Number))

const visited = Array(n + 1).fill(false)
let answer = []

const dfs = (start, target) => {
  if (!visited[start]) {
    visited[start] = true
    dfs(secondLine[start], target)
    visited[start] = false
  }else{
      if (start === target) {
        answer.push(target)
      }
  }

}

for (let i = 1; i <= n; i++) {
  dfs(i, i)
}
answer.sort((a, b) => a - b)
console.log(answer.length)
console.log(answer.join("\n"))
