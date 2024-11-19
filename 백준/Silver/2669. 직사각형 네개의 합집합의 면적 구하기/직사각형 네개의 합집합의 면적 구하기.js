const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")


const numbers = input.slice(0).map((row) => row.split(" ").map(Number))

const answer = new Set()

for (let [x1, y1, x2, y2] of numbers) {
  const graph = Array.from({ length: 101 }, () => Array.from({ length: 101 }, () => false))
  for (let sx = y1; sx <= y2; sx += 1) {
    for (let sy = x1; sy <= x2; sy += 1) {
      graph[sx][sy] = true
      if(graph[sx][sy] && graph[sx][sy-1] && graph[sx-1][sy-1] && graph[sx-1][sy]){
        answer.add(`${sx}${sy}${sx-1}${sy-1}`)
      }

    }
  }
}

console.log(answer.size)