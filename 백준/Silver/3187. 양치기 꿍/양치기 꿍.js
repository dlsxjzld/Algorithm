const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [R, C] = input[0].split(" ").map(Number)
const graph = input.slice(1).map((line) => line.split(""))
const move = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
]
const visited = Array.from({ length: R }, () => Array(C).fill(false))

const bfs = (x, y) => {
  const queue = [[x, y]]
  let index = 0
  let sheepCount = 0
  let wolfCount = 0

  if (graph[x][y] === "v") {
    wolfCount += 1
  } else if (graph[x][y] === "k") {
    sheepCount += 1
  }

  while (queue.length > index) {
    const [curX, curY] = queue[index++]

    for (const [dx, dy] of move) {
      const newX = curX + dx
      const newY = curY + dy

      if (
        newX < 0 ||
        newY < 0 ||
        newX >= R ||
        newY >= C ||
        visited[newX][newY] ||
        graph[newX][newY] === "#"
      ) {
        continue
      }

      visited[newX][newY] = true

      if (graph[newX][newY] === "v") {
        wolfCount += 1
      } else if (graph[newX][newY] === "k") {
        sheepCount += 1
      }

      queue.push([newX, newY])
    }
  }

  if (sheepCount > wolfCount) {
    sheep += sheepCount
  } else {
    wolf += wolfCount
  }
}

let sheep = 0
let wolf = 0

for (let i = 0; i < R; i += 1) {
  for (let j = 0; j < C; j += 1) {
    {
      if (graph[i][j] !== "#" && !visited[i][j]) {
        visited[i][j] = true
        bfs(i, j)
      }
    }
  }
}

console.log(sheep, wolf)