const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, m] = input[0].split(" ").map(Number)
const graph = input.slice(1, 1 + n).map((row) => row.split(" ").map(Number))
let answer = 0
const virusPositionList = []
graph.forEach((row, i) => {
  row.forEach((val, j) => {
    if (val === 2) {
      virusPositionList.push([i, j])
    }
  })
})

const moveVirus = (newGraph, startPositionList) => {
  const queue = startPositionList.map((row) => row.map((val) => val))
  const dx = [0, 0, 1, -1]
  const dy = [1, -1, 0, 0]
  let safe = 0
  const checkGraph = newGraph.map((row) => row.map((val) => val))

  while (queue.length > 0) {
    const [x, y] = queue.shift()
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i]
      const ny = y + dy[i]

      if (nx < 0 || ny < 0 || nx >= n || ny >= m || checkGraph[nx][ny] !== 0) {
        continue
      }
      checkGraph[nx][ny] = 2
      queue.push([nx, ny])
    }
  }

  checkGraph.forEach((row) => {
    row.forEach((val) => {
      if (val === 0) {
        safe += 1
      }
    })
  })

  return safe
}

const makeWall = (newGraph, cnt) => {
  const row = newGraph.length
  const col = newGraph[0].length

  if (cnt === 3) {
    const result = moveVirus(newGraph, virusPositionList)

    answer = Math.max(answer, result)
    return
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (newGraph[i][j] === 0) {
        newGraph[i][j] = 1
        makeWall(newGraph, cnt + 1)
        newGraph[i][j] = 0
      }
    }
  }
}

makeWall(graph, 0)
console.log(answer)
