const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").filter(Boolean)

let index = 0

// z x y
const move = [
  [1, 0, 0],
  [-1, 0, 0],
  [0, 1, 0],
  [0, -1, 0],
  [0, 0, 1],
  [0, 0, -1],
]
// 상 하 북 남 동 서

const bfs = (graph,startPosition, L, R, C,endPosition) => {
  const queue = [...startPosition]
  const [tz,tx,ty] = endPosition[0]
  const visited = Array.from({ length: L }, () => Array.from({ length: R }, () => Array.from({ length: C }, () => -1)))
  for (let [z, x, y] of startPosition) {
    visited[z][x][y] = 0
  }

  let index = 0
  while (queue.length > index) {
    const [z, x, y] = queue[index++]
    for (let i = 0; i < 6; i++) {
      const nz = z + move[i][0]
      const nx = x + move[i][1]
      const ny = y + move[i][2]
      if (
        nx < 0 ||
        ny < 0 ||
        nz < 0 ||
        nz >= L ||
        nx >= R ||
        ny >= C ||
        graph[nz][nx][ny] === "#" ||
        visited[nz][nx][ny] !== -1
      ) {
        continue
      }
      visited[nz][nx][ny] = visited[z][x][y] + 1
      queue.push([nz, nx, ny])
    }
  }
  return visited[tz][tx][ty]
}
const answer = []
while (true) {
  const [L, R, C] = input[index++].split(" ").map(Number)
  if (L === 0 && R === 0 && C === 0) break
  const graph = []
  const startPosition = []
  const endPosition = []
  for (let i = 0; i < L; i++) {
    graph.push(input.slice(index, index + R).map((row) => row.split("")))
    index += R
  }
  for (let i = 0; i < L; i++) {
    for (let j = 0; j < R; j++) {
      for (let k = 0; k < C; k++) {
        if (graph[i][j][k] === "S") {
          startPosition.push([i, j, k])
        } else if (graph[i][j][k] === "E") {
          endPosition.push([i, j, k])
        }
      }
    }
  }
  const result = bfs(graph,startPosition,L,R,C,endPosition)
  if(result === -1){
    answer.push("Trapped!")
  }else{
    answer.push(`Escaped in ${result} minute(s).`)
  }
}

console.log(answer.join('\n'))