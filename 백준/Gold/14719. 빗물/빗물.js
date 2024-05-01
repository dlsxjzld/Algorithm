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

let answer = 0 // 빗물의 총합
for (let i = 0; i < n; i++) {
  // 새로운 행 시작할 때 벽 위치, 빗물 개수 초기화
  // -1 -1 로 둬서 현재 벽 없음으로 초기화
  let current_wall = { x: -1, y: -1 } // 행의 벽 위치
  let rain = 0 // 행의 빗물

  for (let j = 0; j < m; j++) {
    if (graph[i][j] == 1) {
      // 벽 만나면 벽 위치 초기화 및 빗물 더하기
      current_wall.x = i
      current_wall.y = j
      answer += rain
      rain = 0
    } else {
      // 벽과 벽 사이에 있는 빈 칸만 빗물임
      // 벽을 한 번은 만났어야 빗물 개수 셀 수 있음
      if (current_wall.x !== -1 && current_wall.y !== -1) {
        rain += 1 //
      }
    }
  }
}

console.log(answer)
