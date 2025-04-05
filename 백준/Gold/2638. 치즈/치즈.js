const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [N, M] = input[0].split(" ").map(Number)
const graph = input.slice(1).map((line) => line.split(" "))
const move = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
]

// 각 치즈 격자(작 은 정사각형 모양)의 4변 중에서
// 적어도 2변 이상이 실내온도의 공기와 접촉한 것은 정확히 한시간만에 녹아 없어져 버린다.
// 치즈 내부에 있는 공간은 치즈 외부 공기와 접촉하지 않는 것으로 가정한다.
const checkAir = () => {
  const queue = [[0, 0]]
  graph[0][0] = "2" // 외부 공기
  const visited = Array.from({ length: N }, () => Array(M).fill(false))
  visited[0][0] = true
  let index = 0

  while (queue.length > index) {
    const [curX, curY] = queue[index++]

    for (const [dx, dy] of move) {
      const newX = curX + dx
      const newY = curY + dy

      if (
        newX >= 0 &&
        newY >= 0 &&
        newX < N &&
        newY < M &&
        graph[newX][newY] !== "1" &&
        !visited[newX][newY]
      ) {
        graph[newX][newY] = "2" // 외부 공기
        visited[newX][newY] = true
        queue.push([newX, newY])
      }
    }
  }
}

let time = 0
while (true) {
  checkAir()
  const meltedCheese = []

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (graph[i][j] === "1") {
        let outAir = 0
        for (const [dx, dy] of move) {
          const newX = i + dx
          const newY = j + dy

          if (
            newX >= 0 &&
            newY >= 0 &&
            newX < N &&
            newY < M &&
            graph[newX][newY] === "2"
          ) {
            outAir += 1
          }
        }

        if (outAir >= 2) {
          graph[i][j] = "3" // 치즈가 녹음
          meltedCheese.push([i, j])
        }
      }
    }
  }

  if (meltedCheese.length > 0) {
    for (let i = 0; i < meltedCheese.length; i++) {
      const [x, y] = meltedCheese[i]
      graph[x][y] = "2"
    }
  }

  time += 1
  let hasCheese = false
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (graph[i][j] === "1") {
        hasCheese = true
      }
    }
  }

  if (!hasCheese) {
    console.log(time)
    break
  }
}
