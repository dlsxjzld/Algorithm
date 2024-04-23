const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, m] = input[0].split(" ").map(Number)
const graph = input.slice(1).map((row) => row.split(" ").map(Number))
const dx = [0, 0, 1, -1]
const dy = [1, -1, 0, 0]

const canSetVirusPosition = []
let answer = Number.MAX_SAFE_INTEGER

graph.forEach((row, i) =>
  row.forEach((val, j) => {
    if (val == 2) {
      canSetVirusPosition.push([i, j])
    }
  }),
)

const visitedVirus = Array.from(
  { length: canSetVirusPosition.length },
  () => false,
)

const check = (_graph) => {
  const newGraph = _graph.map((row) => row.map((val) => val))
  const distance = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => Number.MAX_SAFE_INTEGER),
  )
  const queue = []
  newGraph.forEach((row, i) =>
    row.forEach((val, j) => {
      if (val == 3) {
        queue.push([i, j])
        distance[i][j] = 0
      }
    }),
  )

  let index = 0
  while (queue.length > index) {
    const [x, y] = queue[index++]

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i]
      const ny = y + dy[i]
      if (
        nx < 0 ||
        ny < 0 ||
        nx >= n ||
        ny >= n ||
        newGraph[nx][ny] == 1 ||
        newGraph[nx][ny] == 3
      ) {
        continue
      }
      newGraph[nx][ny] = 3
      distance[nx][ny] = distance[x][y] + 1
      queue.push([nx, ny])
    }
  }
  let min = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (newGraph[i][j] == 0 || newGraph[i][j] == 2) {
        return Number.MAX_SAFE_INTEGER
      }
      if (newGraph[i][j] == 3) {
        min = Math.max(min, distance[i][j])
      }
    }
  }
  return min
}

const setVirus = (virus, _graph,prevR,prevC) => {
  if (virus == m) {
    answer = Math.min(answer, check(_graph))
    return
  }
for(let idx=0;idx<canSetVirusPosition.length;idx++){
    const [nx,ny] = canSetVirusPosition[idx]
    if(prevR > nx) continue
    if(prevR == nx && prevC > ny) continue
    if (!visitedVirus[idx]) {
      visitedVirus[idx] = true
      _graph[nx][ny] = 3
      setVirus(virus + 1, _graph,nx,ny)
      visitedVirus[idx] = false
      _graph[nx][ny] = 2
    }
}
}

setVirus(0, graph,canSetVirusPosition[0][0],canSetVirusPosition[0][1])

console.log(answer == Number.MAX_SAFE_INTEGER ? -1 : answer)
