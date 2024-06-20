const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [r, c] = input[0].split(" ").map(Number)

const graph = input.slice(1).map((row) => row.split(""))

const move = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]
const checkSea = (x, y) => {
  // X 주변 X개수가 1이하면 다 바다로 변함
  let cnt = 0

  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + move[i][0], y + move[i][1]]
    if (nx < 0 || ny < 0 || nx >= r || ny >= c) {
      continue
    }
    if (graph[nx][ny] === "X") {
      cnt += 1
    }
  }
  if (cnt <= 1) return true
  return false
}

const pos = []

graph.forEach((row, r) => {
  row.forEach((val, c) => {
    if (val === "X") {
      const isGoingSea = checkSea(r, c)
      // 해당하는 position x,y 메모
      if (isGoingSea) {
        pos.push([r, c])
      }
    }
  })
})

for (let [x, y] of pos) {
  // 바다로 변화시키기
  graph[x][y] = "."
}
// X인지 확인하면서 MAX_Row,MAX_Col,MIN_Row,MIN_Col 위치 갱신?
let max_r = -Infinity
let max_c = -Infinity
let min_r = Infinity
let min_c = Infinity

graph.forEach((row, r) => {
  row.forEach((val, c) => {
    if (val === "X") {
      max_r = Math.max(max_r, r)
      max_c = Math.max(max_c, c)
      min_r = Math.min(min_r, r)
      min_c = Math.min(min_c, c)
    }
  })
})

const answer = []
for (let i = 0; i < r; i++) {
  if (i >= min_r && i <= max_r) {
    answer.push([...graph[i].slice(min_c, max_c + 1)])
  }
}
console.log(answer.map((row) => row.join("")).join("\n"))
