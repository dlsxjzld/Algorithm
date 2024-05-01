const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, m] = input[0].split(" ").map(Number)

const heightList = input[1].split(" ").map(Number)
const graph = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => 0),
)

heightList.forEach((height, col) => {
  for (let i = 0; i < height; i++) {
    graph[i][col] = 1
  }
})

let answer = 0
let current_wall = { x: -1, y: -1 }
for (let i = 0; i < n; i++) {
  let rain = 0
    current_wall.x = -1
    current_wall.y = -1
  for (let j = 0; j < m; j++) {
    if (graph[i][j] == 1) {
      current_wall.x = i
      current_wall.y = j
      answer += rain
      rain = 0
    } else {
      if (current_wall.x !== -1 && current_wall.y !== -1) {
        rain += 1 
      }
    }
  }
}

console.log(answer)
