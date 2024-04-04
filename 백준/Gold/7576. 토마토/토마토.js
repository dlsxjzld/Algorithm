const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")



const [m, n] = input[0].split(" ").map(Number)
const graph = input.slice(1).map((row) => row.split(" ").map(Number))

let unrippen = 0 // 안익은 토마토
let answer = 0

const startPosition = []
graph.forEach((row, ridx) =>
  row.forEach((val, cidx) => {
    if (val === 1) {
      startPosition.push([ridx, cidx,0])
    }
    else if(val === 0){
      unrippen +=1
    }
  }),
)

const bfs = (queue) => {
  const move = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]
  let index = 0

  while (index <queue.length) {
    const [x, y,day] = queue[index]
    index +=1
    answer = day

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + move[i][0], y + move[i][1]]
      if (nx < 0 || ny < 0 || nx >= n || ny >= m || graph[nx][ny] !== 0) {
        continue
      }
      graph[nx][ny] = graph[x][y] + 1
      queue.push([nx,ny,graph[nx][ny]])
      unrippen -= 1
    }
  }
}

if(unrippen === 0){
  console.log(0)
  return
}else{
  bfs(startPosition)
}

if(unrippen >0){
  console.log(-1)
}else{
  console.log(answer-1)
}
