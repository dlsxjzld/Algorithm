const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [n, m] = input[0].split(" ").map(Number)
const graph = input.slice(1).map((row) => row.split(" ").map(Number))
const virusPosition = []
let emptySpace = 0
let answer = Number.MAX_SAFE_INTEGER

graph.forEach((row, i) =>
  row.forEach((val, j) => {
    if (val == 2) {
      virusPosition.push([i, j])
      graph[i][j] = "v"
    } else if (val == 1) {
      graph[i][j] = "-"
    } else if (val == 0) {
      emptySpace += 1
    }
  }),
)
const dx = [0, 0, 1, -1]
const dy = [1, -1, 0, 0]

const spreadVirus = (_graph, _emptySpace) => {
  const queue = []
  let index = 0
  const newGraph = _graph.map((row) => row.map((val) => val))
  newGraph.forEach((row, i) =>
    row.forEach((val, j) => {
      if (val == 1) {
        queue.push([i, j])
      }
    }),
  )
  
  
  while (queue.length > index) {
    const [x, y] = queue[index++]
    
    if(_emptySpace == 0){
      break
    }
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i]
      const ny = y + dy[i]
      if (nx < 0 || ny < 0 || nx >= n || ny >= n || newGraph[nx][ny] == "-")
        continue
      if(newGraph[nx][ny] == 0 ){
        newGraph[nx][ny] = newGraph[x][y] + 1
        queue.push([nx, ny])
        _emptySpace-=1
      }
      else if(newGraph[nx][ny] == 'v'){
          newGraph[nx][ny] = newGraph[x][y] + 1
          queue.push([nx,ny])
      }
    }
  }
  let cnt = -1
  newGraph.forEach((row, i) =>
    row.forEach((val, j) => {
      if (val != '-' && val !='v') {
        cnt = Math.max(cnt,val)
      }
    }),
  )
  if(_emptySpace>0){
    return Number.MAX_SAFE_INTEGER
  }else{
      return cnt-1
  }

}

const setVirus = (virusCount, _graph, prevR, prevC) => {
  if (virusCount == m) {
      
    answer = Math.min(answer,spreadVirus(_graph, emptySpace))
    return
  }
  for (let i = 0; i < virusPosition.length; i++) {
    const [nx, ny] = virusPosition[i]
    if (nx < prevR) continue
    if (nx == prevR && ny < prevC) continue
    if(_graph[nx][ny] == 'v'){
    _graph[nx][ny] = 1
    setVirus(virusCount + 1, _graph, nx, ny)
    _graph[nx][ny] = "v"    
    }
    
  }
}

setVirus(0, graph, virusPosition[0][0], virusPosition[0][1])

console.log(answer == Number.MAX_SAFE_INTEGER ? -1 : answer)