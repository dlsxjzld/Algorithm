const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const secondLine = [0].concat(input.slice(1).map(Number))
// 사이클이 되면 된다

const visited = Array.from({ length: n + 1 }, () => false)
const answer = []

// dfs (백트래킹)
// 사이클 판단
// 사이클 되면 answer에 값 추가

const dfs = (start, target) => {
    const next = secondLine[start]
  if (!visited[next]) {
    visited[next] = true
    dfs(next, target)
    visited[next] = false
  } else {

    if (next === target) {
      answer.push(target)
    }
  }
}

for (let i = 1; i <= n; i++) {
    if(!visited[i]){
       visited[i] = true
       dfs(i, i)   
        visited[i] = false
    }
}

console.log(answer.length)
console.log(answer.join('\n'))
