const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

// 검은색 1
// 흰색 2
// 누가 이겼는지 판단 -> 가로, 세로, 대각선 검사 필요

// 좌에서 우, 상에서 하, 왼쪽위에서 오른쪽 아래 대각선, 오른쪽위에서 왼쪽 아래 대각선

// 오목이 되는 경우 -> 5개, 연속적, 같은 색상,

const board = input.slice().map((row) => row.split(" ").map(Number))

const move = [
  [-1, 1], //동북
  [0, 1], // 동
  [1, 1], // 동남
  [1, 0], // 남
]

const bfs = (start, color, direction) => {
  const [sx, sy] = start
  const queue = [[...start]]
  const position = [[...start]]
  const visited = Array.from({ length: 19 }, () =>
    Array.from({ length: 19 }, () => false),
  )
  visited[sx][sy] = true

  while (queue.length > 0) {
    const [x, y] = queue.shift()

    const [nx, ny] = [x + move[direction][0], y + move[direction][1]]
    if (
      nx < 0 ||
      ny < 0 ||
      nx >= 19 ||
      ny >= 19 ||
      board[nx][ny] !== color ||
      visited[nx][ny]
    ) {
      continue
    }
    queue.push([nx, ny])
    position.push([nx, ny])
  }
  if (position.length === 5) {
    // direction 별 앞이랑 뒤 확인해야함
    const [fx, fy] = [sx - move[direction][0], sy - move[direction][1]]
    // 앞 O
    if (fx >= 0 && fy >= 0 && fx < 19 && fy < 19) {
      if (board[fx][fy] === color) {
        return false
      }
    }

    // 앞 X
    console.log(color)
    console.log(sx + 1, sy + 1)
    return true
  }
  return false
}


let flag = false
for (let i = 0; i < 19; i++) {
  for (let j = 0; j < 19; j++) {
    if (board[i][j] !== 0 && flag === false) {
      // 바둑돌이 있다면
      for (let k = 0; k < 4; k++) {
        flag = bfs([i, j], board[i][j], k)
        if(flag === true){
            break
        }

      }
    }
  }
}
if(flag === false){
   
  console.log(0)
}