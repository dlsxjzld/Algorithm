const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const m = Number(input[1])
const busList = input.slice(2, 2 + m).map((row) => row.split(" ").map(Number))
const MAX = Number.MAX_SAFE_INTEGER

const graph = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => MAX),
)
// const answer = Array.from({ length: n }, () =>
//   Array.from({ length: n }, () => MAX),
// )

busList.forEach(([a, b, c]) => {
  graph[a - 1][b - 1] = Math.min(c, graph[a - 1][b - 1])
})

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i == j) {
        graph[i][j] = 0
        continue
      }

      if (graph[i][k] !== MAX && graph[k][j] !== MAX) {
        graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j])
      }
    }
  }
}
const answer = graph.map(row=>row.map(val=>{
  if(val === MAX){
    return 0
  }
  return val
}))
console.log(answer.map(row=>row.join(' ')).join('\n'))