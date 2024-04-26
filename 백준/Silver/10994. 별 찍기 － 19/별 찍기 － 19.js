const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const n = Number(input[0])
const graph = Array.from({ length: n * 4 - 3 }, () =>
  Array.from({ length: n * 4 - 3 }, () => " "),
)

const makeStar = (rs, re) => {
  if (rs > re) return
  for (let start = rs; start <= re; start++) {
    graph[start][rs] = "*"
    graph[rs][start] = "*"
    graph[re][start] = "*"
    graph[start][re] = "*"
  }
  makeStar(rs + 2, re - 2)
}

makeStar(0, n * 4 - 4)

console.log(graph.map(row=>row.join('')).join('\n'))

