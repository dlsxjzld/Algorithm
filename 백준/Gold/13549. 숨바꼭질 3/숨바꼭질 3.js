const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, k] = input[0].split(" ").map(Number)
const visited = Array.from({length:100100},()=>false)

let answer = Number.MAX_SAFE_INTEGER
function bfs(start, cnt) {
  const queue = [[start, cnt]]

  while (queue.length > 0) {
    const [x, ncnt] = queue.shift()
    if (x === k) {
      answer = Math.min(answer, ncnt)
      return
    }

    for (let nx of [2 * x,x - 1, x + 1]) {
      if (nx <0 || nx>100000 || visited[nx]) {
        continue
      }
      if (nx === 2 * x) {
        queue.unshift([nx, ncnt])
      } else {
        queue.push([nx, ncnt + 1])
      }
      visited[nx] = true
    }
  }
}

bfs(n, 0)
console.log(answer)